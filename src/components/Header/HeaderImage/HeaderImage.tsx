import React from 'react';
import styles from './HeaderImage.module.css';

const HeaderImage: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <img 
        src={require('../../../assets/images/header.PNG')} 
        alt="Pessoa usando o EconomiZap" 
        className={styles.image}
      />
    </div>
  );
};

export default HeaderImage; 