import React from 'react';
import styles from './HeaderImage.module.css';
import headerImage from '../../../assets/images/header.PNG';

const HeaderImage: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <img 
        src={headerImage} 
        alt="Pessoa usando o EconomiZap" 
        className={styles.image}
      />
    </div>
  );
};

export default HeaderImage; 