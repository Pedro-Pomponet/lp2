import React from 'react';
import styles from './Pricing.module.css';
import { ReactComponent as RocketIcon } from '../../assets/icons/rocket.svg';
import { ReactComponent as CreditCardIcon } from '../../assets/icons/credit-card.svg';
import { ReactComponent as CrownIcon } from '../../assets/icons/crown.svg';
import { ReactComponent as ShieldIcon } from '../../assets/icons/shield.svg';

const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.startNow}>
        <RocketIcon className={styles.rocketIcon} />
        Comece imediatamente
      </div>

      <div className={styles.planCard}>
        <div className={styles.planLabel}>PLANO MENSAL</div>
        <h2>Plano Mensal</h2>
        <div className={styles.price}>
          R$ 14.90<span className={styles.period}>/mês</span>
        </div>
        <button className={styles.monthlyBtn}>
          <CreditCardIcon className={styles.cardIcon} />
          Assinar Plano Mensal
        </button>
      </div>

      <div className={styles.planCard}>
        <div className={`${styles.planLabel} ${styles.popularLabel}`}>MAIS POPULAR</div>
        <h2>Plano Anual</h2>
        <div className={styles.price}>
          R$ 120.00<span className={styles.period}>/ano</span>
        </div>
        <div className={styles.equivalent}>Equivalente a R$ 10.00/mês</div>
        <button className={styles.annualBtn}>
          <CrownIcon className={styles.crownIcon} />
          Assinar Plano Anual
        </button>
      </div>

      <div className={styles.securePayment}>
        <ShieldIcon className={styles.shieldIcon} />
        Pagamento 100% seguro
      </div>
    </section>
  );
};

export default Pricing;