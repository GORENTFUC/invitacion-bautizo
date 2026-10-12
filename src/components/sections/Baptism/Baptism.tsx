import Section from '../../layout/Section/Section'
import VenueDetails from '../../ui/VenueDetails/VenueDetails'
import { BAPTISM, CELEBRANT_NAME, EVENT_DATE_LABEL } from '../../../data/event'

function Baptism() {
  return (
    <Section
      id="bautizo"
      eyebrow="La ceremonia"
      title={BAPTISM.title}
      intro={`Acompáñanos a presenciar el bautizo de ${CELEBRANT_NAME}.`}
      tone="surface"
    >
      <VenueDetails venue={BAPTISM} dateLabel={EVENT_DATE_LABEL} />
    </Section>
  )
}

export default Baptism
