import React, { ReactNode } from 'react'
import InfoWidget from './InfoWidget'
import {GitHub, Icon, Linkedin} from 'react-feather'
import ElementAnimation from './ElementAnimation';

type Social = {
  icon: Icon;
  link: string;
}

const socialsList: Social[] = [
  {
    icon: GitHub,
    link: 'https://github.com/joshmackay'
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/joshmackay/'
  }
]

type Props = {
  side: "left" | "right";
}

export default function SocialsWidget({side}: Props) {
  return (
    <InfoWidget side={side} >
      {
        socialsList.map((icon, i) => (
          <ElementAnimation key={i}>
            <a  href={icon.link} target='_blank'>
              <icon.icon width={24} height={48} />
            </a>
          </ElementAnimation>
        ))
      }
    </InfoWidget>
  )
}