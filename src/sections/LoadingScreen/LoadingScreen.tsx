import React from 'react'
import styles from './LoadingScreen.module.css'
import IconLogoDraw from '@/components/Logo/LogoDraw'

type Props = {
  handleIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const durationOutline: number = 1.2;
const durationLetter: number = 1;
const durationShrink: number = 0.3;
const durationPause: number = 0.3;
const totalTime: number = (durationLetter + durationOutline + durationPause + durationShrink) * 1000;

export default function LoadingScreen({ handleIsLoading }: Props) {
  
  React.useEffect(() => {
    window.setTimeout(() => handleIsLoading(false), totalTime)
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