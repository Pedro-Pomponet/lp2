import React from 'react';
import styles from './Features.module.css';

// Ícone de Microfone (Registro por Voz)
const IconMic = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
    <path d="M12 15a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a1 1 0 1 1 2 0 7 7 0 0 1-6 6.92V21a1 1 0 1 1-2 0v-2.08A7 7 0 0 1 5 12a1 1 0 1 1 2 0 5 5 0 0 0 10 0Z" fill="#21916b"/>
  </svg>
);

// Ícone de Tag (Categorização Inteligente)
const IconTag = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
    <path d="M20.59 13.41 12 22 2 12V4h8l10.59 9.41a2 2 0 0 1 0 2.83ZM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke="#21916b" strokeWidth="2" fill="none"/>
  </svg>
);

// Ícone de Planilha/Tabela (Relatórios Automáticos)
const IconSpreadsheet = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#21916b" strokeWidth="2" fill="none"/>
    <path d="M3 9h18M9 5v14" stroke="#21916b" strokeWidth="2" />
  </svg>
);

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <span className={styles.cardIcon}><IconMic /></span>
            <div className={styles.cardText}>
              <h3>Registro por Voz</h3>
              <p>Diga adeus às anotações: fale e o Economiza Ai registra tudo automaticamente.</p>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}><IconTag /></span>
            <div className={styles.cardText}>
              <h3>Categorização Inteligente</h3>
              <p>Identifique seus maiores gastos em segundos</p>
            </div>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}><IconSpreadsheet /></span>
            <div className={styles.cardText}>
              <h3>Relatórios Automáticos</h3>
              <p>Saiba exatamente onde seu dinheiro está indo com insights personalizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;