import React, { ReactNode } from 'react'
import styles from './OverlayedImage.module.css'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'
type Props = {
  imgSrc: string
  className: unknown;
}

const imageWrapperVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 }
}

const imageOverlayVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0 }
}

export default function OverlayedImage({imgSrc, className}: Props) {
  
  return (
    <>
        <motion.div
        variants={imageOverlayVariants}
        className={styles.imageOverlay}
        initial="rest"
        whileHover="hover"
 >
      </motion.div>
      <Image className={styles.image} src={imgSrc} alt={''} fill={true} />
    </>
  )
}