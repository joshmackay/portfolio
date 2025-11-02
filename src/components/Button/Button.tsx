
import React, { ReactNode } from 'react'
import styles from './Button.module.css'


type Props = {
  children: ReactNode;
  className?: string
  href: string;
  openNewPage: boolean;
  size: "small" | "large";
}

export default function Button({children, className, href, openNewPage, size}: Props) {
  
  return (
      <a 
      href={href} 
      target={openNewPage ? "_blank" : undefined} 
      className={`${styles.styledButton} ${styles[size]} ${className ?? ""}`}
      >
        {children}
      </a>
  )
}