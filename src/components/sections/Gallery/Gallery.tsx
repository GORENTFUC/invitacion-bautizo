import Section from '../../layout/Section/Section'
import photo02 from '../../../assets/images/IMG_02.jpeg'
import photo03 from '../../../assets/images/IMG_03.jpeg'
import photo04 from '../../../assets/images/IMG_04.jpeg'
import photo05 from '../../../assets/images/IMG_05.jpeg'
import photo06 from '../../../assets/images/IMG_06.jpeg'
import photo07 from '../../../assets/images/IMG_07.jpeg'
import photo08 from '../../../assets/images/IMG_08.jpeg'
import photo09 from '../../../assets/images/IMG_09.jpeg'
import photo10 from '../../../assets/images/IMG_10.jpeg'
import photo11 from '../../../assets/images/IMG_11.jpeg'
import photo12 from '../../../assets/images/IMG_12.jpeg'
import { CELEBRANT_NAME } from '../../../data/event'
import styles from './Gallery.module.css'

/* El orden define el área del mosaico (p1, p2, ...) declarada en Gallery.module.css */
const photos = [
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
]

function Gallery() {
  return (
    <Section
      id="galeria"
      eyebrow="Momentos"
      title="Galería"
      intro="Algunos de los momentos más bonitos de su primer año."
      tone="surface"
    >
      <div className={styles.album}>
        <ul className={styles.grid}>
          {photos.map((src, index) => (
            <li key={src} className={styles.item} style={{ gridArea: `p${index + 1}` }}>
              <img
                src={src}
                alt={`Fotografía ${index + 1} de ${CELEBRANT_NAME}`}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Gallery
