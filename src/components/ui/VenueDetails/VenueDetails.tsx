import type { EventVenue } from '../../../types/event'
import LocationLink from '../LocationLink/LocationLink'
import styles from './VenueDetails.module.css'

interface VenueDetailsProps {
  venue: EventVenue
  dateLabel: string
}

function VenueDetails({ venue, dateLabel }: VenueDetailsProps) {
  return (
    <div className={styles.card}>
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Fecha</dt>
          <dd>{dateLabel}</dd>
        </div>
        <div className={styles.row}>
          <dt>Hora</dt>
          <dd>{venue.time}</dd>
        </div>
        <div className={styles.row}>
          <dt>Lugar</dt>
          <dd>{venue.place}</dd>
        </div>
        <div className={styles.row}>
          <dt>Ciudad</dt>
          <dd>{venue.city}</dd>
        </div>
      </dl>
      <LocationLink venue={venue} />
    </div>
  )
}

export default VenueDetails
