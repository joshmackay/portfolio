import { motion } from 'motion/react'
import React from 'react'

type Props = {
  children: React.ReactNode;
  viewportStart: number;
  childStagger: number;
}

export default function EntryAnimationGroup({childStagger, children, viewportStart}: Props) {
  return (
    <motion.div 
      style={{width: "100%"}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportStart }}
      variants={{
        visible: {
          transition: {
            staggerChildren: childStagger,
          }
        }
      }}>
        {children}
        
      </motion.div>
  )
}