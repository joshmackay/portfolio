import React, { ReactNode } from 'react'
import styles from './OverlayedImage.module.css'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'
type Props = {
  imgSrc: string
  className: unknown;
}


const imageOverlayVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0 }
}

export default function OverlayedImage({imgSrc, className}: Props) {
  
  return (
    <div className={styles.wrapper}>
      <motion.div
      variants={imageOverlayVariants}
      className={styles.imageOverlay}
      initial="rest"
      whileHover="hover">
      </motion.div>
      <Image className={styles.image} src={imgSrc} alt={''} fill={true} />
    </div>
  )
}