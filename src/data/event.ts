import type { EventVenue } from '../types/event'

export const CELEBRANT_NAME = 'María Isabel'
export const CELEBRANT_FULL_NAME = 'María Isabel Quiza Sanchez'

export const EVENT_DATE_LABEL = 'Domingo 8 de noviembre de 2026'
export const EVENT_DATE_ISO = '2026-11-08'

/* Colombia (America/Bogota) usa UTC-5 todo el año, sin horario de verano. */
export const EVENT_START = new Date('2026-11-08T13:00:00-05:00')

export const BAPTISM: EventVenue = {
  title: 'Bautizo',
  time: '9:00 a. m.',
  place: 'Iglesia del Rosario',
  city: 'Garzón, Huila',
  mapUrl: 'https://maps.app.goo.gl/qYYCxLU5L9wfL5FZ7',
}

export const BIRTHDAY: EventVenue = {
  title: 'Primer cumpleaños',
  time: '1:00 p. m.',
  place: 'Carrera 12 # 5 - 21, Br El Rosario',
  city: 'Garzón, Huila',
  mapUrl: 'https://maps.app.goo.gl/zUrB8gDU7Arcx2tt7',
}

/* Colombia (+57). Solo dígitos, sin espacios ni signos. */
export const WHATSAPP_PHONE = '573232109278'

export const WHATSAPP_RSVP_MESSAGE =
  `Hola, confirmo mi asistencia al bautizo y primer año de vida de ${CELEBRANT_NAME} el ${EVENT_DATE_LABEL}.`

export function getWhatsAppRsvpUrl(): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_RSVP_MESSAGE)}`
}
