'use client'
import React from 'react'
import Nav from '../../components/Nav/Nav'
import styles from './Header.module.css'
import Logo from '@/components/Logo/Logo'
import Hex from '@/components/Logo/Hex'
import {motion} from 'motion/react'
import { Menu, X } from 'react-feather'
import { MenuOpenContext } from '@/context/MenuOpenProvider'

export default function Header() {
  
  const context = React.useContext(MenuOpenContext);
    if (!context)
    {
      throw new Error("useContext(MenuOpenContext) must be used inside a MenuOpenProvider");
    }
    const { menuOpen, setMenuOpen } = context;
  
  
  React.useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 769 && menuOpen){
        setMenuOpen(false);
      }
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',handleResize);
  })
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Hex className={styles.hex} />
          
          <motion.div className={styles.animateLogoWrapper}
          whileHover={{ x: -4, y: -4 }}>
            <Logo className={styles.logo} />
          </motion.div>
          
        </div>
        <Nav className={styles.nav} />
        <aside className={`${styles.mobileMenu} ${menuOpen ? styles.open : styles.closed}`}>
          <Nav className={styles.mobileNav} />
        </aside>
        <Menu 
          onClick={() => setMenuOpen(true)} 
          className={`${styles.menuButton} ${menuOpen ? styles.closed : styles.open}`}   />
        <X 
          onClick={() => setMenuOpen(false)} 
          className={`${styles.closeButton} ${menuOpen ? styles.open : styles.closed}`}/>
      </header>
    </>
  )
}