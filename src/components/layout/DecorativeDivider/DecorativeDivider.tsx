import styles from './DecorativeDivider.module.css'

interface DecorativeDividerProps {
  className?: string
}

function DecorativeDivider({ className }: DecorativeDividerProps) {
  const classNames = className ? `${styles.divider} ${className}` : styles.divider

  return (
    <div className={classNames} aria-hidden="true">
      <span className={styles.line} />
      <svg className={styles.ornament} viewBox="0 0 32 12" focusable="false">
        <path d="M16 1 L21 6 L16 11 L11 6 Z" />
        <circle cx="4" cy="6" r="1.2" />
        <circle cx="28" cy="6" r="1.2" />
      </svg>
      <span className={styles.line} />
    </div>
  )
}

export default DecorativeDivider
