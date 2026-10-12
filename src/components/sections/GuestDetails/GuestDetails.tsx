import Section from '../../layout/Section/Section'
import { CELEBRANT_NAME } from '../../../data/event'
import styles from './GuestDetails.module.css'

interface GuestNote {
  title: string
  text: string
  isPending?: boolean
}

const notes: GuestNote[] = [
  {
    title: 'Lluvia de sobres',
    text: `Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con ${CELEBRANT_NAME}, habrá lluvia de sobres.`,
  },
  {
    title: 'Confirmación de asistencia',
    text: 'Pronto podrás confirmar tu asistencia por WhatsApp desde esta invitación.',
    isPending: true,
  },
  {
    title: 'Información adicional',
    text: 'Compartiremos más detalles cuando estén confirmados.',
    isPending: true,
  },
]

function GuestDetails() {
  return (
    <Section
      id="invitados"
      eyebrow="Para nuestros invitados"
      title="Información importante"
      tone="surface"
    >
      <ul className={styles.list}>
        {notes.map(({ title, text, isPending }) => (
          <li key={title} className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            {isPending && <p className={styles.pending}>Pendiente de confirmación</p>}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default GuestDetails
