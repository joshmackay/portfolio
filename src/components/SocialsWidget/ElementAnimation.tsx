import React, { ReactNode } from 'react'
import styles from './EmailWidget.module.css'
import * as motion from "motion/react-client"
type Props = {
  children: ReactNode;
}

export default function ElementAnimation({ children }: Props)
{
  return (
    <motion.span transition={{type: 'tween'}} whileHover={{y: -4, color: "var(--green)"}}>
      {children}
    </motion.span>
  )
}