import React from 'react';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className={styles.pricing}>
      <div className={styles.container}>
        <h2>Planos e Preços</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Básico</h3>
            <p className={styles.price}>R$ 99/mês</p>
            <ul>
              <li>Recurso 1</li>
              <li>Recurso 2</li>
              <li>Recurso 3</li>
            </ul>
            <button>Começar Agora</button>
          </div>
          {/* Adicione mais planos conforme necessário */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;