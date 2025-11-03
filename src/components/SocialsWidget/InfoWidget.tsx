import React, { ReactNode } from 'react'
import styles from './InfoWidget.module.css'

type Props = {
  children: ReactNode;
  className?: string;
  side: "left" | "right";
}

export default function InfoWidget({children, className, side}: Props) {
  return (
    <div className={`${styles.infoWrapper} ${className ?? undefined} ${styles[side]}`}>
      {children}
    </div>
  )
}