import Section from '@/components/Section/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import React from 'react'
import styles from './OtherProjects.module.css'
import { ProjectDetail } from '@/types/ProjectDetail'
import ProjectCard from './ProjectCard'


const projects: ProjectDetail[] = [
  {
    id: 1,
    name: "Advanced Todo App",
    description: "This was one of my earlier project and I didn't want to just do a typical todo list. I wanted to be able to add or remove individual lists, add priorities, edit details, reorder todo lists and inlcude resizeable window panels. Oh, it's all vanilla JS wiht an MVC pattern.",
    tools: ["Javascript", "HTML", "CSS"],
    links: {
      github: "https://github.com/joshmackay/todo-app",
      site: "https://joshmackay.github.io/todo-app/"
    }
  },
  {
    id: 2,
    name: "Etch-a-Sketch",
    description: "Another early project, a challenge to build an etch a sketch game without using canvas, but a simple grid of divs.  Not the most performant way to do it, but a fun little project. It includes various controls to play with.",
    tools: ["Javascript", "HTML", "CSS"],
    links: {
      github: "https://github.com/joshmackay/etch-a-sketch",
      site: "joshmackay.github.io/etch-a-sketch/"
    }
  },
]

export default function OtherProjects() {
  return (
    <Section fullHeight={false}>
      <SectionHeading useCount ={false}>Other Noteworthy Projects</SectionHeading>
      <p></p>
      <div className={styles.content}>
        {projects && projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Section>
  )
}