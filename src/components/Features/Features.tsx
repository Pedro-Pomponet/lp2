import React from 'react';
import styles from './Features.module.css';

// Importando ícones
import walletIcon from '../../assets/icons/wallet.svg';
import bellIcon from '../../assets/icons/bell.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';
import microphoneIcon from '../../assets/icons/microphone.svg';
import chartPieIcon from '../../assets/icons/chart-pie.svg';
import chartLineIcon from '../../assets/icons/chart-line.svg';

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Funcionalidades</h2>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <img src={walletIcon} alt="Orçamento" className={styles.cardIcon} />
            <h3>Gerencie seu orçamento</h3>
            <p>Categorize seus gastos de forma simples e eficiente</p>
          </div>

          <div className={styles.card}>
            <img src={bellIcon} alt="Lembretes" className={styles.cardIcon} />
            <h3>Receba lembretes</h3>
            <p>Nunca mais perca um prazo de pagamento</p>
          </div>

          <div className={styles.card}>
            <img src={invoiceIcon} alt="Boletos" className={styles.cardIcon} />
            <h3>Emita boletos</h3>
            <p>Gere e gerencie cobranças de forma rápida e segura</p>
          </div>

          <div className={styles.card}>
            <img src={microphoneIcon} alt="Voz" className={styles.cardIcon} />
            <h3>Registro por Voz</h3>
            <p>Diga adeus às anotações: fale e o Economizap registra tudo automaticamente</p>
          </div>

          <div className={styles.card}>
            <img src={chartPieIcon} alt="Categorização" className={styles.cardIcon} />
            <h3>Categorização Inteligente</h3>
            <p>Identifique seus maiores gastos em segundos</p>
          </div>

          <div className={styles.card}>
            <img src={chartLineIcon} alt="Relatórios" className={styles.cardIcon} />
            <h3>Relatórios Automáticos</h3>
            <p>Saiba exatamente onde seu dinheiro está indo com insights personalizados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;