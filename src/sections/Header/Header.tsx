'use client'
import React from 'react'
import Nav from '../../components/Nav/Nav'
import styles from './Header.module.css'
import Logo from '@/components/Logo/Logo'
import Hex from '@/components/Logo/Hex'
import {motion} from 'motion/react'
import { Menu, X } from 'react-feather'
import { MenuOpenContext } from '@/context/MenuOpenProvider'
import EntryAnimationGroup from '@/components/animations/EntryAnimationGroup'
import EntryAnimationChild from '@/components/animations/EntryAnimationChild'

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
    <EntryAnimationGroup  viewportStart={0} childStagger={0.15}>
      <header  className={styles.header}>
        <EntryAnimationChild  startOffsetY={-20} duration={0.2}>
          <div onClick={() => window.location.href = "/"} className={styles.logoContainer}>
            <Hex className={styles.hex} />
            
            <motion.div className={styles.animateLogoWrapper}
            whileHover={{ x: -4, y: -4 }}>
              <Logo className={styles.logo} />
            </motion.div>
            
          </div>
          
        </EntryAnimationChild>
        
        <EntryAnimationChild duration={0.2} startOffsetY={-20}>
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
          
        </EntryAnimationChild>
      </header>
      
    </EntryAnimationGroup>
    </>
  )
}