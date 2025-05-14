import React from 'react';
import styles from './Header.module.css';
import HeaderText from './HeaderText/HeaderText';
import HeaderImage from './HeaderImage/HeaderImage';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderText />
        <HeaderImage />
      </div>
    </header>
  );
};

export default Header; 