import Section from '../../layout/Section/Section'
import { CELEBRANT_NAME } from '../../../data/event'

/* Texto provisional: la familia puede reemplazarlo por su propio mensaje. */
function OurStory() {
  return (
    <Section
      id="nuestra-historia"
      eyebrow="Su primer año"
      title="Un año lleno de bendiciones"
      intro={`Hace un año llegó ${CELEBRANT_NAME} y, con ella, una alegría que llenó nuestro hogar. Cada sonrisa, cada descubrimiento y cada abrazo nos recuerdan lo afortunados que somos. Queremos celebrar este primer año de vida y su bautizo junto a las personas que más queremos.`}
    />
  )
}

export default OurStory
