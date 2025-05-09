import React from 'react';
import styles from './Logo.module.css';
import logo from '../../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt="EconomiZap Logo" className={styles.logo} />
    </div>
  );
};

export default Logo; 