import React from 'react';
import styles from './Hero.module.css';
import headerImage from '../../assets/header.png';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftGrid}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Pronto para Transformar suas Finanças?</h1>
          <p className={styles.description}>
            Junte-se a milhares de pessoas que já estão economizando e organizando 
            suas finanças de forma inteligente com o Economizap.
          </p>
          <a href="#signup" className={styles.ctaButton}>
            Comece Agora
          </a>
        </div>
      </div>

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