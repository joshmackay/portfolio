import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'
import Button from '../Button/Button'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href={''}>About</a>
      <a href={''}>Experience</a>
      <a href={''}>Work</a>
      <a href={''}>Contact</a>
      <Button href={''} openNewPage={false} size={'small'}>Resume</Button>
    </nav>
  )
}