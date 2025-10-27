import React, { ReactNode } from 'react'
import styles from './InfoWidget.module.css'

type Props = {
  children: ReactNode;
  side: "left" | "right";
}

export default function InfoWidget({children, side}: Props) {
  return (
    <div className={`${styles.infoWrapper} ${styles[side]}`}>
      {children}
    </div>
  )
}