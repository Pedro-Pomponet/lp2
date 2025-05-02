import React from 'react';
import styles from './Hero.module.css';
import headerImage from '../../assets/header.png';
import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <HeroText />
      <HeroButton />
      <div className={styles.rightGrid}>
        <img 
          src={headerImage} 
          alt="Economizap Hero" 
          className={styles.heroImage} 
        />
      </div>
    </section>
  );
};

export default Hero; 