import React, { ReactNode } from 'react'
import styles from './Section.module.css'

type Props = {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean
}

export default function Section({ children, className, fullHeight }: Props) {
  console.log(styles)
  return (
    <section className={`${styles.section ?? ""} ${className ?? ""} ${fullHeight ? styles.fullHeight : ""}`}>
      <div className={`${styles.innerWrapper ?? ""}`}>{children}</div>
    </section>
  )
}