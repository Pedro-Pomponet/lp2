import React from 'react';
import styles from './HeaderText.module.css';
import whatsappIcon from '../../../assets/icons/icon-whatsapp.png';

const HeaderText: React.FC = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.title}>
        Seu controle<br />
        financeiro agora é<br />
        no WhatsApp
      </h1>
      
      <p className={styles.subtitle}>
        Chega de planilhas! Com o EconomiZap, você fala, e a mágica acontece: gastos anotados, organizados e analisados – tudo pelo zap.
      </p>

      <a href="#" className={styles.button}>
        <span className={styles.whatsappIcon}>
          <img src={whatsappIcon} alt="WhatsApp" />
        </span>
        Começar agora
      </a>
    </div>
  );
};

export default HeaderText; 