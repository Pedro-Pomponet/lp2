import React from 'react';
import styles from './Pricing.module.css';
import { ReactComponent as RocketIcon } from '../../assets/icons/rocket.svg';
import { ReactComponent as CreditCardIcon } from '../../assets/icons/credit-card.svg';
import { ReactComponent as CrownIcon } from '../../assets/icons/crown.svg';
import { ReactComponent as ShieldIcon } from '../../assets/icons/shield.svg';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.desktopTitleContainer}>
          <h2>Nossos Planos</h2>
        </div>

        <div className={styles.startNow}>
          <span className={`${styles.iconWrapper} ${styles.rocketIcon}`}>
            <RocketIcon />
          </span>
          <span>Comece imediatamente</span>
        </div>

        <div className={styles.pricingGrid}>
          <div className={styles.planCard}>
            <div className={styles.planLabel}>PLANO MENSAL</div>
            <h2 className={styles.price}>
              R$ 14,90<span className={styles.period}>/mês</span>
            </h2>
            <button className={styles.monthlyBtn}>
              <span className={styles.iconWrapper}>
                <CreditCardIcon />
              </span>
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
              <span className={styles.iconWrapper}>
                <CrownIcon />
              </span>
              Assinar Plano Anual
            </button>
          </div>
        </div>

        <div className={styles.security}>
          <span className={styles.iconWrapper}>
            <ShieldIcon />
          </span>
          Pagamento 100% seguro
        </div>
      </div>
    </section>
  );
};

export default Pricing;