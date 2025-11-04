import React from 'react'
import styles from './LoadingScreen.module.css'
import IconLogoDraw from '@/components/Logo/LogoDraw'
import { durationOutline, durationLetter, durationPause, durationShrink, totalLoaderTime } from '@/utils'
type Props = {
  handleIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoadingScreen({ handleIsLoading }: Props) {
  
  React.useEffect(() => {
    window.setTimeout(() => handleIsLoading(false), totalLoaderTime)
  }, []);
  
  return (
    <div className={styles.loading} >
      <IconLogoDraw 
      durationOutline={durationOutline} 
      durationLetter={durationLetter} 
        durationPause={durationPause}
      durationShrink={durationShrink}
      className={styles.logo} />
    </div>
  )
}