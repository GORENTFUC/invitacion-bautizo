import Section from '../../layout/Section/Section'
import { useCountdown } from '../../../hooks/useCountdown'
import { EVENT_START } from '../../../data/event'
import styles from './Countdown.module.css'

function formatUnit(value: number): string {
  return String(value).padStart(2, '0')
}

function Countdown() {
  const { days, hours, minutes, seconds, isFinished } = useCountdown(EVENT_START)

  const units = [
    { label: 'Días', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
    { label: 'Segundos', value: seconds },
  ]

  return (
    <Section id="cuenta-regresiva" eyebrow="Cuenta regresiva" title="Falta muy poco">
      {isFinished ? (
        <p className={styles.finished}>¡Llegó el gran día! Gracias por acompañarnos.</p>
      ) : (
        <div className={styles.timer} role="timer">
          {units.map(({ label, value }) => (
            <div key={label} className={styles.unit}>
              <span className={styles.value}>{formatUnit(value)}</span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

export default Countdown
