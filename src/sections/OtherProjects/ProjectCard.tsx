import { ProjectDetail } from '@/types/ProjectDetail'
import React from 'react'
import {Icon, GitHub, ExternalLink, Folder} from 'react-feather'
import styles from './ProjectCard.module.css'
import * as motion from "motion/react-client"
type Props = {project: ProjectDetail}

export default function ProjectCard({project: {id, name, description, tools, links}}: Props) {
  return (
    <motion.div 
    className={styles.card}
    whileHover={{y:-10}}
    transition={{type: 'tween', duration: 0.2}}>
      <div className={styles.cardInner}>
        <div className={styles.iconContainer}>
          <Folder className={styles.folderIcon} />
          <div className={styles.rightIcons}>
            <a href={links?.github} target='_blank'>
              <GitHub className={styles.githubIcon} />
            </a>
            <a href={links?.site} target='_blank'>
              <ExternalLink className={styles.linkIcon} />
            </a>
          </div>
        </div>
        
        <h3 className={styles.h3}>{name}</h3>
        
        <p className={styles.description}>{description}</p>
        
        <ul>
          {tools && tools.map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>
        
      </div>
    </motion.div>
  )
}