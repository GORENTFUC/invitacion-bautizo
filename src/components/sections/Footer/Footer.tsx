import DecorativeDivider from '../../layout/DecorativeDivider/DecorativeDivider'
import LocationLink from '../../ui/LocationLink/LocationLink'
import {
  BAPTISM,
  BIRTHDAY,
  CELEBRANT_FULL_NAME,
  EVENT_DATE_ISO,
  EVENT_DATE_LABEL,
} from '../../../data/event'
import styles from './Footer.module.css'

const venues = [BAPTISM, BIRTHDAY]

function Footer() {
  return (
    <footer className={styles.footer}>
      <DecorativeDivider />
      <p className={styles.thanks}>Gracias por ser parte de este día tan especial</p>
      <p className={styles.name}>{CELEBRANT_FULL_NAME}</p>
      <p className={styles.date}>
        <time dateTime={EVENT_DATE_ISO}>{EVENT_DATE_LABEL}</time>
      </p>

      <ul className={styles.locations}>
        {venues.map((venue) => (
          <li key={venue.title} className={styles.location}>
            <span className={styles.venueTitle}>{venue.title}</span>
            <LocationLink venue={venue} />
          </li>
        ))}
      </ul>

      <DecorativeDivider className={styles.closingDivider} />
    </footer>
  )
}

export default Footer
