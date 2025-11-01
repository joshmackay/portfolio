'use client'
import React, { ReactNode } from 'react'
import styles from './Scale.module.css'
import { motion, Variants } from 'motion/react'
type Props = {
  children: ReactNode;
}

const scaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 }
}

export default function Scale({ children }: Props)
{

  return (
    <motion.div
      className={styles.imageOverlayWrapper}
      transition={{ type: 'tween' }}
      variants={scaleVariants}
      whileHover="hover"
      initial="rest"
    >
      {children}
    </motion.div>
  )
}