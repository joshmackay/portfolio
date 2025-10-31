import React, { ReactNode } from 'react'
import styles from './ImageOverlay.module.css'
type Props = {children: ReactNode}

export default function ImageOverlay({children}: Props) {
  return (
    <div className={styles.imageAnimation}>{children}</div>
  )
}