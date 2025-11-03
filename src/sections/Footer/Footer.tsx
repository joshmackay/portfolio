import Section from '@/components/Section/Section'
import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Design by <a href="https://github.com/bchiang7/v4">Brittany Chiang.</a></p>
      <p>Rebuilt from scratch by me.</p>
    </footer>
  )
}