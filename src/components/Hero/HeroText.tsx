import React from "react";
import styles from "./Hero.module.css";

const HeroText: React.FC = () => (
  <div className={styles.heroTextWrapper}>
    <span className={styles.heroTitle}>
      Controle suas finanças direto pelo WhatsApp!
    </span>
    <span className={styles.heroSubtitle}>
      Simplifique sua vida financeira, economize mais e prospere sem precisar abrir nenhuma tabela.
    </span>
  </div>
);

export default HeroText; 