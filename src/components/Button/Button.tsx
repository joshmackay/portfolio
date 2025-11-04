
import React, { ReactNode } from 'react'
import styles from './Button.module.css'


type Props = {
  children: ReactNode;
  className?: string
  href?: string;
  openNewPage: boolean;
  size: "small" | "large";
  onClick?: () => void;
}

export default function Button({children, className, href, openNewPage, size, onClick}: Props) {
  const Tag = href ? "a" : "button"
  
  return (
      <Tag 
      href={href}

      onClick={onClick }
      className={`${styles.styledButton} ${styles[size]} ${className ?? ""}`}
      >
        {children}
      </Tag>
  )
}