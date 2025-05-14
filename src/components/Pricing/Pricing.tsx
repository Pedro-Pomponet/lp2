import React from 'react';
import styles from './Pricing.module.css';
import { ReactComponent as RocketIcon } from '../../assets/icons/rocket.svg';
import { ReactComponent as CreditCardIcon } from '../../assets/icons/credit-card.svg';
import { ReactComponent as CrownIcon } from '../../assets/icons/crown.svg';
import { ReactComponent as ShieldIcon } from '../../assets/icons/shield.svg';
import logo from '../../assets/logo.png';

const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt="Economizap" className={styles.logo} />
          <h1>Economizap</h1>
        </div>

        <div className={styles.desktopTitleContainer}>
          <h2>Nossos Planos</h2>
        </div>

        <div className={styles.startNow}>
          <RocketIcon className={styles.rocketIcon} />
          <span>Comece imediatamente</span>
        </div>

        <div className={styles.pricingGrid}>
          <div className={styles.planCard}>
            <div className={styles.planLabel}>PLANO MENSAL</div>
            <h2 className={styles.price}>
              R$ 14,90<span className={styles.period}>/mês</span>
            </h2>
            <button className={styles.monthlyBtn}>
              <CreditCardIcon className={styles.cardIcon} />
              Assinar Plano Mensal
            </button>
          </div>

          <div className={styles.planCard}>
            <div className={`${styles.planLabel} ${styles.popularLabel}`}>MAIS POPULAR</div>
            <h2 className={styles.price}>
              R$ 120,00<span className={styles.period}>/ano</span>
            </h2>
            <div className={styles.equivalent}>Equivalente a R$ 10,00/mês</div>
            <button className={styles.annualBtn}>
              <CrownIcon className={styles.crownIcon} />
              Assinar Plano Anual
            </button>
          </div>
        </div>

        <div className={styles.security}>
          <ShieldIcon className={styles.shieldIcon} />
          Pagamento 100% seguro
        </div>
      </div>
    </section>
  );
};

export default Pricing;