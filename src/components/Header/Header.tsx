import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import HeroText from './HeroText/HeroText';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <HeroText />
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.wave}>
        <path 
          fill="#f2efe8"
          fillOpacity="1" 
          d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,144C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </header>
  );
};

export default Header; 