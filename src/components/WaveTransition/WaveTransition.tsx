import React from 'react';
import styles from './WaveTransition.module.css';
import header from '../../assets/header.png';

export default function WaveTransition() {
  return (
    <div className={styles.waveContainer}>
      <div className={styles.imageContainer}>
        <img src={header} alt="Pessoa usando o EconomiZap no celular" className={styles.image} />
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="#f2efe8" 
          fillOpacity="1" 
          d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,144C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </div>
  );
} 