import React from 'react';
import styles from './HeaderImage.module.css';
import { Images } from '../../../assets';
import SafeImage from '../../SafeImage/SafeImage';

const HeaderImage: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <SafeImage 
        src={Images.header}
        alt="Pessoa usando o EconomiZap" 
        className={styles.image}
      />
    </div>
  );
};

export default HeaderImage; 