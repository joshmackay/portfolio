import Button from '@/components/Button/Button'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import React from 'react'
import styles from './Contact.module.css'

const email: string = "joshwmackay@gmail.com"

export default function Contact() {
  return (
    <Section className={styles.contactSection} fullHeight={false}  >
      <div className={styles.content}>
        <SectionHeading className={styles.heading} useCount={true}>What&apos;s Next?</SectionHeading>
        <p className={styles.subHeading}>Get In Touch</p>
        <p className={styles.description}>I am currently looking for my next opportunity, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you as soon as I can!</p>
        <Button href={`mailto:${email}`} openNewPage={true} size='large'>Say Hello</Button>
      </div>
    </Section>
  )
}