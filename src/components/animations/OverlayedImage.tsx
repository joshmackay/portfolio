import React, { ReactNode } from 'react'
import styles from './OverlayedImage.module.css'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'
type Props = {
  imgSrc: string
  className?: string;
  width: number;
  height: number;
}


const imageOverlayVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0 }
}

export default function OverlayedImage({imgSrc, className, width, height}: Props) {
  const aspectRatio = width/height;

  return (
    <div 
      className={styles.wrapper}
      style={{ aspectRatio}}>
      <motion.div
      variants={imageOverlayVariants}
      className={styles.imageOverlay}
      initial="rest"
      whileHover="hover">
      </motion.div>
      <Image 
      fill 
      className={`${styles.image} ${className ||undefined}`} 
      src={imgSrc} alt={''} />
    </div>
  )
}