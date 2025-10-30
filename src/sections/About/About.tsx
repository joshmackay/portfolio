'use client'
import Section from '@/components/Section/Section'
import React from 'react'
import Image from 'next/image'
import styles from './About.module.css'
import * as motion from "motion/react-client"
import { Variants } from 'motion'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About()
{
  const [imgHovered, setImgHovered] = React.useState(false);
  
  const imgVariants: Variants = {
    initial: { x: 0, y: 0, scale: 1 },
    animate: { x: -4, y: -4, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 22 } }
  };

  const borderVariants: Variants = {
    initial: { x: 0, y: 0 },
    animate: { x: 4, y: 4, transition: { type: "spring", stiffness: 300, damping: 22 } }
  };
  
  const imageOverlayVariants: Variants = {
    initial: { opacity: 1 },
    animate: { opacity: 0 }
  }
  
  return (
    <Section fullHeight={false} >
      <SectionHeading>About Me</SectionHeading>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p>
            Hi, I’m Josh — a full-stack developer who loves creating things for the web.
            I enjoy working with people just as much as writing code, for me, building is about solving real problems with others.
          </p>
          
          <p>
            Coming from an engineering and business background, I care as much about systems and structure as I do about design and the experience of the people using what I build.
          </p>

          <p>
            Right now, I’m focused on Tanqya, a crowdsourced petrol-price tracking app for Colombia, and diving deep into AI, not just using it, but learning how to build with it.
          </p>
          
          <p>
            Here are a few of the technologies I’ve been working with recently:
          </p>
          
          <ul className={styles.techList}>
            <li>React</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>C#</li>
            <li>.Net</li>
            <li>Python</li>
          </ul>
        </div>
        
        <div>
          <div className={styles.wrapper}>
            <motion.div 
              className={styles.imageWrapper}
              onHoverStart={() => setImgHovered(true)}
              onHoverEnd={() => setImgHovered(false)}
              variants={imgVariants}
              initial="initial"
              animate={imgHovered ? "animate" : "initial"}>
                <motion.span 
                className={styles.imageOverlay} 
                variants={imageOverlayVariants}
                initial="initial"
                animate={imgHovered ? "animate" : "initial"}>
                </motion.span>
                
                <Image 
                className={styles.image} 
                src={'/Untitled.png'} 
                alt={''} 
                fill={true} />
                  
            </motion.div>
            
            <motion.span className={styles.imageBorder} initial="initial" variants={borderVariants} animate={imgHovered ? "animate" : "initial"}></motion.span>
            
          </div>
            
        </div>
      </div>
    </Section>
  )
}