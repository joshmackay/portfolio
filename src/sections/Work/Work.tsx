'use client'
import Section from '@/components/Section/Section'
import React from 'react'
import styles from './Work.module.css'
import * as motion from "motion/react-client"
import SectionHeading from '@/components/ui/SectionHeading'
import { ProjectDetail } from '@/types/ProjectDetail'
import FeaturedProject from './FeaturedProject'



const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    name: "This Portfolio",
    image: "/portfolio-web.png",
    description: "This very portfolio you are viewing. I wanted to build something simple with React firstly to start getting back into using React, but to also create a place for you to get to know me.",
    tools: [
      "React",
      "TypeScript",
      "NextJS",
      "Motion",
      "CSS-Modules",
      "Vercel"
    ],
    links: {
      github: "https://github.com/joshmackay/portfolio",
    }
  },
  {
    id: 2,
    name: "TanqYa Mobile App (Frontend)",
    image: "/tanqya-web.png",
    description: "This is an Android app that allows users to find and navigate to the cheapest petrol stations in Colombia. The app relies on crowdsourced data where users are required to update petrol station prices.  The app is live and the next phase is to develop an incentive scheme to encourage usage.",
    tools: [
      "Flutter",
      "Dart",
      "GIS Mapping",
      "SupaBase",
      "Firebase",
      "JWT"
    ],
    links: {
      site: "https://play.google.com/store/apps/details?id=com.tanqya.app"
    }
  },
  {
    id: 3,
    name: "TanqYa Mobile App (Backend)",
    image: "/tanqya-web-dash.png",
    description: "This is the Tanqya backend which is built with an ASP.NET minimal API and PostgreSQL database.\nThe admin panel, currently a work in progress, is a Blazor app which is used for visualising and updating data.\nThis codebase has not been made public as it is a production app.",
    tools: [
      "C#",
      "ASP.NET", 
      "Minimal Api",
      "EF Core",
      "Blazor",
      "PostgreSQL",
      "Docker",
      "Digital Ocean"
    ],
    links: {
    }
  },
]

export default function Work(){

  return (
    <Section className={styles.section} fullHeight={false} >
      <SectionHeading>Some Things I&apos;ve Built</SectionHeading>
      <div>
        {projectDetails.map(project => {
          return <FeaturedProject key={project.id} projectDetail={project} />
        })}
      </div>
    </Section>
  )
}