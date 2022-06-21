import React from 'react'
import styles from './progress.module.css'

const Progress = ({ progress }) => {
  return (
    <div className={styles.progressbar}>
      <div className={styles.progressbarProgress} style={{width: `${progress}%`}} ></div>
    </div>
  )
}

export default Progress