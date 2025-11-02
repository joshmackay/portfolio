import Section from '@/components/Section/Section'
import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Design by <a>Brittany Chiang</a></p>
      <p>Rebuilt from scratch by Me</p>
    </footer>
  )
}