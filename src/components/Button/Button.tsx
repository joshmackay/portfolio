'use client'
import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Button.module.css'
import * as motion from "motion/react-client"

type Props = {
  children: ReactNode;
  className?: string
  href: string;
  openNewPage: boolean;
  size: "small" | "large";
}

export default function Button({children, className, href, openNewPage, size}: Props) {
  
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({x: 0, y: 0})
  
  useEffect(() => {
    const el = anchorRef.current;
    if(!el) return;
    
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    setOffset({x: w, y: h})
    
  }, [])
  
  return (
    <span className={styles.wrapper}>
      <span className={styles.buttonShadow} style={{width: offset.x, height: offset.y}}></span>
      <motion.a 
      ref={anchorRef}
      href={href} 
      target={openNewPage ? "_blank" : undefined} 
      className={`${styles.styledButton} ${styles[size]} ${className ?? ""}`}
        initial={{
          x: 0,
          y: 0,
        }}
      whileHover={{
        x: -offset.x/20,
        y: -offset.y/20,
      }}
      transition={{type:"tween"}}
      onHoverStart={() => console.log("hover start")}
      onHoverEnd={() => console.log("hover end")}
      >
        {children}
      </motion.a>
    </span>
    
    
    
  )
}