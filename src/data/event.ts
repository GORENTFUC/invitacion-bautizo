import type { EventVenue } from '../types/event'

export const CELEBRANT_NAME = 'María Isabel'

export const EVENT_DATE_LABEL = 'Domingo 1 de noviembre de 2026'
export const EVENT_DATE_ISO = '2026-11-01'

/* Colombia (America/Bogota) usa UTC-5 todo el año, sin horario de verano. */
export const EVENT_START = new Date('2026-11-01T14:00:00-05:00')

export const BAPTISM: EventVenue = {
  title: 'Bautizo',
  time: '9:00 a. m.',
  place: 'Iglesia del Rosario',
  city: 'Garzón, Huila',
}

export const BIRTHDAY: EventVenue = {
  title: 'Primer cumpleaños',
  time: '3:00 p. m.',
  place: 'Carrera 12 # 5 - 21, Br El Rosario',
  city: 'Garzón, Huila',
}
