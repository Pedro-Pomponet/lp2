import React from 'react';
import styles from './CallToAction.module.css';
import Images from '../../assets';
import { WhatsAppIcon } from '../Icons';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img 
            src={Images.header} 
            alt="Pessoa usando o EconomiZap no celular" 
            className={styles.image}
          />
        </div>
        
        <div className={styles.ctaContent}>
          <a href="#pricing" className={styles.ctaButton}>
            <span className={styles.whatsappIcon}>
              <WhatsAppIcon size={32} />
            </span>
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 