import React from 'react';
import styles from './Pricing.module.css';

// SVGs inline
const IconCheckShield = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2L19 5V10C19 15.25 14.5 18 11 20C7.5 18 3 15.25 3 10V5L11 2Z" stroke="#2DBB54" strokeWidth="2" fill="none"/>
    <path d="M8 11L11 14L15 9" stroke="#2DBB54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconLightning = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 12H11L9 20L18 10H11L13 2Z" stroke="#2DBB54" strokeWidth="2" fill="none"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="12" width="3" height="7" rx="1" fill="#2DBB54"/>
    <rect x="9" y="7" width="3" height="12" rx="1" fill="#2DBB54"/>
    <rect x="15" y="4" width="3" height="15" rx="1" fill="#2DBB54"/>
  </svg>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.pricingGrid}>
        <div className={styles.benefits}>
          <h3 className={styles.benefitsTitle}>Por que escolher?</h3>
          <ul>
            <li><span className={styles.icon}><IconCheckShield /></span> Pagamento 100% seguro</li>
            <li><span className={styles.icon}><IconLightning /></span> Comece imediatamente</li>
            <li><span className={styles.icon}><IconBarChart /></span> Resultados comprovados</li>
          </ul>
        </div>
        <div className={styles.plans}>
          <div className={styles.planCard}>
            <span className={styles.planLabel}>PLANO MENSAL</span>
            <h3>Plano Mensal</h3>
            <div className={styles.price}>R$ 19.9<span className={styles.per}>/mês</span></div>
            <button className={styles.monthlyBtn}>
              <span role="img" aria-label="Cartão">💳</span> Continuar com Plano Mensal
            </button>
          </div>
          <div className={`${styles.planCard} ${styles.popular}`}>
            <span className={styles.planLabel}>MAIS POPULAR</span>
            <h3>Plano Anual</h3>
            <div className={styles.price}>R$ 178.8<span className={styles.per}>/ano</span></div>
            <div className={styles.equivalent}>Equivalente a R$ 14.9/mês</div>
            <button className={styles.annualBtn}>
              <span role="img" aria-label="Coroa">👑</span> Continuar com Plano Anual
            </button>
          </div>
        </div>
      </div>
      <div className={styles.security}>
        <span className={styles.icon} role="img" aria-label="Escudo">🛡️</span>
        Pagamento 100% seguro via Mercado Pago
      </div>
    </section>
  );
};

export default Pricing;