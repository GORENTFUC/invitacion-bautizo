import Section from '../../layout/Section/Section'
import PhotoPlaceholder from '../../ui/PhotoPlaceholder/PhotoPlaceholder'
import styles from './Gallery.module.css'

const PLACEHOLDER_COUNT = 20
const placeholders = Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => index + 1)

function Gallery() {
  return (
    <Section
      id="galeria"
      eyebrow="Momentos"
      title="Galería"
      intro="Las fotografías de su primer año se añadirán próximamente."
      tone="surface"
    >
      <ul className={styles.grid} aria-hidden="true">
        {placeholders.map((number) => (
          <li key={number} className={styles.item}>
            <PhotoPlaceholder caption={`Foto ${number}`} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Gallery
