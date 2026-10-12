import styles from './PhotoPlaceholder.module.css'

interface PhotoPlaceholderProps {
  /* Descripción para lectores de pantalla; sin ella el marcador es decorativo */
  label?: string
  /* Texto visible dentro del marco */
  caption?: string
  shape?: 'arch' | 'rect'
  className?: string
}

/* Espacio reservado mientras se incorporan las fotografías reales. */
function PhotoPlaceholder({
  label,
  caption = 'Fotografía pendiente',
  shape = 'rect',
  className = '',
}: PhotoPlaceholderProps) {
  const shapeClass = shape === 'arch' ? styles.arch : styles.rect
  const a11yProps = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }

  return (
    <div className={`${styles.placeholder} ${shapeClass} ${className}`} {...a11yProps}>
      <span className={styles.caption} aria-hidden="true">
        {caption}
      </span>
    </div>
  )
}

export default PhotoPlaceholder
