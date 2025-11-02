import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'
import Button from '../Button/Button'

type Props = {
  className?: string
}

export default function Nav({className} : Props) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ol>
        <li><a href={''}>About</a></li>
        <li><a href={''}>Experience</a></li>
        <li><a href={''}>Work</a></li>
        <li><a href={''}>Contact</a></li>
      </ol>
      <Button href={''} openNewPage={false} size={'small'}>Resume</Button>
    </nav>
  )
}