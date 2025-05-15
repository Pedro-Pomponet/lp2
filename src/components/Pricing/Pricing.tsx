import React from 'react';
import styles from './Pricing.module.css';
import Images from '../../assets';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.desktopTitleContainer}>
          <h2>Nossos Planos</h2>
        </div>

        <div className={styles.startNow}>
          <span className={`${styles.iconWrapper} ${styles.rocketIcon}`}>
            <img src={Images.icons.rocket} alt="" className={styles.icon} />
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
                <img src={Images.icons.creditCard} alt="" className={styles.icon} />
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
                <img src={Images.icons.crown} alt="" className={styles.icon} />
              </span>
              Assinar Plano Anual
            </button>
          </div>
        </div>

        <div className={styles.security}>
          <span className={styles.iconWrapper}>
            <img src={Images.icons.shield} alt="" className={styles.icon} />
          </span>
          Pagamento 100% seguro
        </div>
      </div>
    </section>
  );
};

export default Pricing;