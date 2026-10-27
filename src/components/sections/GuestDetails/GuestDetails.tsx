import Section from '../../layout/Section/Section'
import { getWhatsAppRsvpUrl } from '../../../data/event'
import styles from './GuestDetails.module.css'

function GuestDetails() {
  return (
    <Section
      id="invitados"
      eyebrow="Para nuestros invitados"
      title="Información importante"
      tone="surface"
    >
      <ul className={styles.list}>
        <li className={styles.card}>
          <h3 className={styles.title}>Confirmación de asistencia</h3>
          <p className={styles.text}>
            Por favor confirma tu asistencia por WhatsApp. Tu respuesta nos ayuda a organizar mejor
            este día especial.
          </p>
          <a
            className={styles.button}
            href={getWhatsAppRsvpUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.buttonIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2.04c-5.46 0-9.9 4.39-9.9 9.81 0 1.73.46 3.42 1.32 4.91L2 22l5.42-1.41A9.9 9.9 0 0 0 12 21.86c5.46 0 9.9-4.39 9.9-9.81S17.46 2.04 12 2.04Zm5.44 13.92c-.23.64-1.33 1.18-1.85 1.25-.47.07-1.07.1-1.73-.11-.4-.12-.91-.28-1.57-.55-2.76-1.19-4.56-3.97-4.7-4.15-.14-.18-1.14-1.51-1.14-2.88 0-1.37.72-2.04.97-2.32.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.23.56.77 1.93.84 2.07.07.14.11.3.02.49-.09.18-.13.3-.26.46-.13.16-.28.36-.4.48-.13.14-.26.28-.11.55.14.28.64 1.05 1.37 1.7.94.84 1.73 1.1 1.97 1.22.25.12.39.1.54-.06.14-.16.62-.72.79-.97.16-.25.33-.21.56-.12.23.09 1.46.69 1.71.81.25.13.42.19.48.29.07.1.07.59-.16 1.23Z" />
            </svg>
            Confirmar asistencia
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default GuestDetails
