import { ProjectDetail } from '@/types/ProjectDetail'
import React from 'react'
import styles from './FeaturedProject.module.css'
import { GitHub, Icon, Link } from 'react-feather'
import OverlayedImage from '@/components/animations/OverlayedImage'
import Scale from '@/components/animations/Scale'
type Props = { projectDetail: ProjectDetail }

export default function FeaturedProject({projectDetail: {id, image, name, description, tools, links}}: Props) {
  return (
    <div className={styles.container}>

          <OverlayedImage className={styles.imageContainer} imgSrc={image} />

      
      <div className={styles.details}>
        <p className={styles.featuredText}>Featured Project</p>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
        </div>
        <ul className={styles.toolsList}>
          {tools.map((tool, i) => (
            <li key={`tool-${i}`}>{tool}</li>
          ))}
        </ul>
        <ul className={styles.linkList}>
          {links && (
            links.github && <li><a href={links.github} target='_blank'><GitHub width={20} /></a></li>
          )}
          {links && (
            links.site && <li><a href={links.site} target='_blank'><Link width={20} /></a></li>
          )}
        </ul>
      </div>
    </div>
  )
}