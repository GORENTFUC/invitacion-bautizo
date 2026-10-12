import type { ReactNode } from 'react'
import DecorativeDivider from '../DecorativeDivider/DecorativeDivider'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  tone?: 'default' | 'surface'
  children?: ReactNode
}

function Section({ id, eyebrow, title, intro, tone = 'default', children }: SectionProps) {
  const headingId = `${id}-title`
  const toneClass = tone === 'surface' ? styles.surface : ''

  return (
    <section id={id} className={`${styles.section} ${toneClass}`} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          <DecorativeDivider />
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export default Section
