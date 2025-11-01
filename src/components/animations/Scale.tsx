'use client'
import React, { ReactNode } from 'react'
import styles from './OverlayedImage.module.css'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'
type Props = {
  children: ReactNode;
}

const scaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 }
}

export default function Scale({ children }: Props)
{

  return (
    <motion.div
      className={styles.scaleWrapper}
      initial="rest"
      whileHover="hover"
      variants={scaleVariants}
    >
      {children}
    </motion.div>
  )
}