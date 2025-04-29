import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.brandText}>Economizap</div>
          
          <div className={styles.logoCenter}>
            <img src={logoImage} alt="Economizap Logo" className={styles.logoImg} />
          </div>

          <ul className={styles.navLinks}>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 