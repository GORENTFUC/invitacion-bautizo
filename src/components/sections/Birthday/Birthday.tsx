import Section from '../../layout/Section/Section'
import VenueDetails from '../../ui/VenueDetails/VenueDetails'
import { BIRTHDAY, CELEBRANT_NAME, EVENT_DATE_LABEL } from '../../../data/event'

function Birthday() {
  return (
    <Section
      id="cumpleanos"
      eyebrow="La celebración"
      title={BIRTHDAY.title}
      intro={`Después de la ceremonia celebraremos juntos el primer año de vida de ${CELEBRANT_NAME}.`}
    >
      <VenueDetails venue={BIRTHDAY} dateLabel={EVENT_DATE_LABEL} />
    </Section>
  )
}

export default Birthday
