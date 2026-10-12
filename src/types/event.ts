export interface EventVenue {
  title: string
  time: string
  place: string
  city: string
  /* Enlace a Google Maps u otro servicio; se mostrará cuando esté confirmado. */
  mapUrl?: string
}
