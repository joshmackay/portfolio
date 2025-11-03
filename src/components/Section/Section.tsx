import React, { ReactNode } from 'react'
import styles from './Section.module.css'

type Props = {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean
  id?: string
}

export default function Section({ children, className, fullHeight, id }: Props) {
  console.log(styles)
  return (
    <section id={id || ""} className={`${styles.section ?? ""} ${className ?? ""} ${fullHeight ? styles.fullHeight : ""}`}>
      {children}
    </section>
  )
}