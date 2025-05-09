import React from 'react';
import styles from './HeroText.module.css';

const HeroText: React.FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <h1 className={styles.title}>
        Seu controle financeiro agora é no WhatsApp
      </h1>
      <p className={styles.subtitle}>
        Chega de planilhas! Com o EconomiZap, você fala, e a mágica acontece: gastos anotados, organizados e analisados – tudo pelo zap.
      </p>
    </div>
  );
};

export default HeroText; 