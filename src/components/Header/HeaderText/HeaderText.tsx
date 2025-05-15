import React from 'react';
import styles from './HeaderText.module.css';
import { Images } from '../../../assets';
import SafeImage from '../../SafeImage/SafeImage';

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

      <a href="#pricing" className={styles.button}>
        <span className={styles.whatsappIcon}>
          <SafeImage src={Images.whatsapp} alt="WhatsApp" />
        </span>
        Começar Agora
      </a>
    </div>
  );
};

export default HeaderText; 