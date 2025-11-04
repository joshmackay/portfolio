
import Section from '@/components/Section/Section'
import React from 'react'
import styles from './Hero.module.css'
import Button from '@/components/Button/Button'
import
  {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import '../../styles/animations.css'
import { totalLoaderTime } from '@/utils/index'
import { motion } from 'motion/react';
import EntryAnimationChild from '@/components/animations/EntryAnimationChild';
import EntryAnimationGroup from '@/components/animations/EntryAnimationGroup';
  
  export default function Hero() {
    const [isMounted, setIsMounted] = React.useState(false);
    
    React.useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 100);
      return () => (clearTimeout(timeout));
    })
    
    const first = <p className={styles.hi}>Hi, my name is</p>;
    const second = <h1 className={styles.h1}>Josh MacKay.</h1>;
    const third = <h2 className={styles.h2}>I build things for the web.</h2>;
    const fourth = (
      <p className={styles.intro}>
        I&apos;m a web and software developer who enjoys solving problems with code,
        creating smooth user experiences, and working directly with clients to bring ideas to life.
      </p>
    );
    const fifth = (
      <div className={styles.heroButtonWrapper}>
        <Button href={'#contact'} openNewPage={false} size={'large'} >Let&apos;s Chat!</Button>
      </div>
    );
    
    const items = [first, second, third, fourth, fifth];
        
    
    
    return (
    <Section className={styles.section} fullHeight={true} >
      <EntryAnimationGroup
      viewportStart={0.3}
      childStagger={0.15}
      >
        {items.map((item, i) => (
          <EntryAnimationChild
          key={i}
            startOffsetY={20}
            duration={0.6}
          >{item}</EntryAnimationChild>
        ))}
        
      </EntryAnimationGroup>
    </Section>
  )
}