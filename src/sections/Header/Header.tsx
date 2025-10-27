import React from 'react'
import Nav from '../../components/Nav/Nav'
import Image from 'next/image'
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.headerLogo} src={'/vercel.svg'} alt={''} width={'48'} height={'48'}></Image>
      <Nav />
    </header>
  )
}