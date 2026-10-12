import DecorativeDivider from '../../layout/DecorativeDivider/DecorativeDivider'
import PhotoPlaceholder from '../../ui/PhotoPlaceholder/PhotoPlaceholder'
import { CELEBRANT_NAME, EVENT_DATE_ISO, EVENT_DATE_LABEL } from '../../../data/event'
import styles from './Hero.module.css'

interface HeroProps {
  /* id de la sección a la que lleva el indicador de desplazamiento */
  nextSectionId: string
}

function Hero({ nextSectionId }: HeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.frame} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.intro}>Con inmensa alegría te invitamos al</p>
          <p className={styles.occasion}>Bautizo y primer año de vida de</p>

          <h1 className={styles.name}>{CELEBRANT_NAME}</h1>

          <DecorativeDivider className={styles.divider} />

          <p className={styles.date}>
            <time dateTime={EVENT_DATE_ISO}>{EVENT_DATE_LABEL}</time>
          </p>
        </div>

        <figure className={styles.photo}>
          <div className={styles.photoFrame}>
            <PhotoPlaceholder
              shape="arch"
              label={`Espacio reservado para la fotografía de ${CELEBRANT_NAME}`}
            />
          </div>
        </figure>
      </div>

      <a className={styles.scrollCue} href={`#${nextSectionId}`}>
        <span>Desliza para descubrir más</span>
        <svg className={styles.scrollIcon} viewBox="0 0 16 24" aria-hidden="true" focusable="false">
          <path d="M8 2 V20 M2 14 L8 20 L14 14" />
        </svg>
      </a>
    </header>
  )
}

export default Hero
