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
        <li><a href={'#about'}>About</a></li>
        <li><a href={'#experience'}>Experience</a></li>
        <li><a href={'#work'}>Work</a></li>
        <li><a href={'#contact'}>Contact</a></li>
      </ol>
      <Button onClick={() => window.open('/resume.pdf', '_blank')} openNewPage={false} size={'small'}>Resume</Button>
    </nav>
  )
}