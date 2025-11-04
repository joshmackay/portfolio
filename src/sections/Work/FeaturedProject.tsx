import { ProjectDetail } from '@/types/ProjectDetail'
import React from 'react'
import styles from './FeaturedProject.module.css'
import { GitHub, Icon, Link } from 'react-feather'
import OverlayedImage from '@/components/animations/OverlayedImage'

import { motion } from 'motion/react'
import Scale from '@/components/animations/Scale'
type Props = { 
  projectDetail: ProjectDetail;
  isOdd: boolean; }

export default function FeaturedProject({projectDetail: {id, image, name, description, tools, links}, isOdd}: Props) {
  const [imageHovered, setImageHovered] = React.useState(false);
  
  return (
    <div className={`${styles.container} ${isOdd ? styles.isodd : ""}`}>
      
      <motion.div 
        className={styles.imageContainer}
        onHoverStart={() => setImageHovered(true)}
        onHoverEnd={() => setImageHovered(false)}
        whileHover={{
          zIndex: 10,
          transition: {duration: 0.8}}}>
            <Scale>
              <OverlayedImage useOverlay={true} width={500} height={320} className={styles.imageContainer} imgSrc={image || ""} />
              
            </Scale>
      </motion.div>

      
      <motion.div 
      className={styles.details}
      animate={{
        zIndex: imageHovered ? 1 : 10,
        opacity: imageHovered ? 0.3 : 1,
        transition: {  type: 'tween',duration: 0.3 }
      }}
      >
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
      </motion.div>
    </div>
  )
}