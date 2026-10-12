import type { EventVenue } from '../../../types/event'
import styles from './LocationLink.module.css'

interface LocationLinkProps {
  venue: EventVenue
}

function LocationLink({ venue }: LocationLinkProps) {
  if (!venue.mapUrl) {
    return <span className={styles.pending}>Ubicación en el mapa: pendiente</span>
  }

  return (
    <a className={styles.link} href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
      Ver ubicación de {venue.place}
    </a>
  )
}

export default LocationLink
