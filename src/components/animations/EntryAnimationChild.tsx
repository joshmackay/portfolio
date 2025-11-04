import { motion } from 'motion/react'
import React from 'react'

type Props = {
  children: React.ReactNode;
  className?: string;
  startOffsetY: number;
  duration: number;
}

export default function EntryAnimationChild({ children, className , duration, startOffsetY}: Props) {
  return (
    <motion.div
      className={className}
      
      variants={{
        hidden: { opacity: 0, y: startOffsetY },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration,

          }
        }
      }}>
      {children}
    </motion.div>
  )
}