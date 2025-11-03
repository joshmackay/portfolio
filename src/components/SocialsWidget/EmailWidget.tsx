import React, { ReactNode } from 'react'
import InfoWidget from './InfoWidget'
import {GitHub, Icon, Linkedin} from 'react-feather'
import styles from './EmailWidget.module.css'
import ElementAnimation from './ElementAnimation';

const email: string = 'joshwademackay@gmail.com';

type Props = {
  side: "left" | "right";
  className?: string;
}

export default function SocialsWidget({side, className}: Props) {
  return (
    <InfoWidget className={className ?? undefined} side={side} >
      {
        <ElementAnimation>
          <a className={styles.email} href={`mailto:${email}`}>{email}</a>
        </ElementAnimation>
      }
    </InfoWidget>
  )
}