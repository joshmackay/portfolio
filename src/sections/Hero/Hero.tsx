
import Section from '@/components/Section/Section'
import React from 'react'
import styles from './Hero.module.css'
import Button from '@/components/Button/Button'

export default function Hero() {
  return (
    <Section className={styles.section} fullHeight={true} >
      <p className={styles.hi}>Hi, my name is</p>
      <h1 className={styles.h1}>Josh MacKay.</h1>
      <h2 className={styles.h2}>I build things for the web.</h2>
      <p className={styles.intro}>
        I&apos;m a web and software developer who enjoys solving problems with code, 
        creating smooth user experiences, and working directly with clients to bring ideas to life.
      </p>
      <div className={styles.heroButtonWrapper}>
        <Button href={'#contact'} openNewPage={false} size={'large'} >Let&apos;s Chat!</Button>
        
      </div>
    </Section>
  )
}