import styles from './Header.module.css';
import logo from '../../assets/logo.png'; // ajuste o caminho se necessário

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Economizap" className={styles.logo} />
      <span className={styles.brand}>Economizap</span>
    </header>
  );
} 