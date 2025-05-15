import React from 'react';
import styles from './Features.module.css';
import { MicrophoneIcon, WalletIcon, ChartPieIcon } from '../Icons';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MicrophoneIcon size={32} className={styles.cardIcon} />,
      title: "Registro por Voz",
      description: "Diga adeus às anotações: fale e o Economiza Ai registra tudo automaticamente."
    },
    {
      icon: <WalletIcon size={32} className={styles.cardIcon} />,
      title: "Categorização Inteligente",
      description: "Identifique seus maiores gastos em segundos"
    },
    {
      icon: <ChartPieIcon size={32} className={styles.cardIcon} />,
      title: "Relatórios Automáticos",
      description: "Saiba exatamente onde seu dinheiro está indo com insights personalizados"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recursos Principais</h2>
        <div className={styles.cardsContainer}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                {feature.icon}
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;