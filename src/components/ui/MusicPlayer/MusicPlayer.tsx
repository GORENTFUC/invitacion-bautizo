import { useEffect, useRef, useState, type CSSProperties } from 'react'
import styles from './MusicPlayer.module.css'

/**
 * El mp3 vive en public/ y se sirve tal cual.
 * Nombre exacto del archivo: public/audio/ojitos-lindos.mp3
 */
const TRACK_SRC = `${import.meta.env.BASE_URL}audio/ojitos-lindos.mp3`
const TRACK_TITLE = 'Ojitos Lindos'
const TRACK_ARTIST = 'Magdalena Matthey'
const TARGET_VOLUME = 0.5

type Playback = 'idle' | 'playing' | 'paused' | 'missing'

interface MusicPlayerProps {
  /* Mientras este elemento esté mayormente en vista, el player permanece oculto */
  hideWhileId?: string
}

function MusicPlayer({ hideWhileId = 'portada' }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const pausedByUser = useRef(false)
  const [playback, setPlayback] = useState<Playback>('idle')
  const [progress, setProgress] = useState(0)
  const [uiVisible, setUiVisible] = useState(false)

  /* No competir con la bienvenida: aparece solo al salir de la portada */
  useEffect(() => {
    const target = document.getElementById(hideWhileId)
    if (!target) {
      const frame = requestAnimationFrame(() => setUiVisible(true))
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setUiVisible(entry.intersectionRatio < 0.55)
      },
      { threshold: [0, 0.25, 0.55, 0.75, 1] },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [hideWhileId])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let alive = true
    audio.volume = TARGET_VOLUME

    const setIfAlive = (next: Playback) => {
      if (alive) setPlayback(next)
    }

    const detachUnlock = () => {
      window.removeEventListener('pointerdown', onUnlock)
      window.removeEventListener('keydown', onUnlock)
      window.removeEventListener('wheel', onUnlock)
      window.removeEventListener('scroll', onUnlock, true)
      window.removeEventListener('touchmove', onUnlock)
    }

    const start = () => {
      if (pausedByUser.current || audio.error) return

      const attempt = audio.play()
      void attempt
        ?.then(() => {
          setIfAlive('playing')
          detachUnlock()
        })
        .catch(() => {
          if (audio.error) setIfAlive('missing')
          else if (audio.paused) setIfAlive(pausedByUser.current ? 'paused' : 'idle')
        })
    }

    const onUnlock = (event: Event) => {
      const root = rootRef.current
      /* El propio botón maneja play/pause; el resto de la página desbloquea. */
      if (root && event.target instanceof Node && root.contains(event.target)) return
      start()
    }

    const onError = () => setIfAlive('missing')
    const onTimeUpdate = () => {
      if (!alive || !audio.duration) return
      setProgress(audio.currentTime / audio.duration)
    }

    audio.addEventListener('error', onError)
    audio.addEventListener('timeupdate', onTimeUpdate)
    window.addEventListener('pointerdown', onUnlock)
    window.addEventListener('keydown', onUnlock)
    window.addEventListener('wheel', onUnlock, { passive: true })
    window.addEventListener('scroll', onUnlock, true)
    window.addEventListener('touchmove', onUnlock, { passive: true })
    start()

    return () => {
      alive = false
      detachUnlock()
      audio.removeEventListener('error', onError)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.pause()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || playback === 'missing') return

    if (!audio.paused) {
      pausedByUser.current = true
      audio.pause()
      setPlayback('paused')
      return
    }

    pausedByUser.current = false
    const attempt = audio.play()
    void attempt
      ?.then(() => setPlayback('playing'))
      .catch(() => {
        setPlayback(audio.error ? 'missing' : 'idle')
      })
  }

  const isPlaying = playback === 'playing'
  const label =
    playback === 'missing'
      ? `${TRACK_TITLE} de ${TRACK_ARTIST} no está disponible`
      : isPlaying
        ? `Pausar ${TRACK_TITLE} de ${TRACK_ARTIST}`
        : `Reproducir ${TRACK_TITLE} de ${TRACK_ARTIST}`

  return (
    <div
      className={styles.player}
      ref={rootRef}
      data-state={playback}
      data-visible={uiVisible ? 'true' : 'false'}
      aria-hidden={uiVisible ? undefined : true}
    >
      <span className={styles.platter} aria-hidden="true">
        <span className={styles.disc}>
          <span className={styles.label} />
          <span className={styles.hole} />
        </span>
        <span className={styles.sheen} />
      </span>

      <button
        type="button"
        className={styles.card}
        aria-pressed={isPlaying}
        aria-label={label}
        disabled={playback === 'missing' || !uiVisible}
        tabIndex={uiVisible ? undefined : -1}
        onClick={toggle}
      >
        <span className={styles.meta}>
          <span className={styles.song}>{TRACK_TITLE}</span>
          <span className={styles.artist}>{TRACK_ARTIST}</span>
        </span>

        <span
          className={styles.progress}
          role="presentation"
          style={{ '--progress': `${Math.min(progress, 1) * 100}%` } as CSSProperties}
        />

        <span className={styles.controls} aria-hidden="true">
          <span className={styles.playIcon} data-playing={isPlaying}>
            {isPlaying ? (
              <svg viewBox="0 0 16 16" focusable="false">
                <rect x="3" y="2" width="3.5" height="12" rx="0.8" />
                <rect x="9.5" y="2" width="3.5" height="12" rx="0.8" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" focusable="false">
                <path d="M4 2.5 L13.5 8 L4 13.5 Z" />
              </svg>
            )}
          </span>
        </span>
      </button>
      <audio ref={audioRef} src={TRACK_SRC} preload="auto" loop />
    </div>
  )
}

export default MusicPlayer
