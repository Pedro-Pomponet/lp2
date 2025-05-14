import React from 'react';
import styles from './Features.module.css';

// Ícones como componentes React normais
const MicIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24"
    className={styles.cardIcon}
  >
    <path 
      fill="currentColor" 
      d="M12 15a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a1 1 0 1 1 2 0 7 7 0 0 1-6 6.92V21a1 1 0 1 1-2 0v-2.08A7 7 0 0 1 5 12a1 1 0 1 1 2 0 5 5 0 0 0 10 0Z"
    />
  </svg>
);

const TagIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24"
    className={styles.cardIcon}
  >
    <path 
      fill="currentColor" 
      d="M20.59 13.41L12 22 2 12V4h8l10.59 9.41a2 2 0 0 1 0 2.83ZM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24"
    className={styles.cardIcon}
  >
    <path 
      fill="currentColor" 
      d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 0v14h14V5H5zm2 4h2v8H7V9zm4-2h2v10h-2V7zm4 4h2v6h-2v-6z"
    />
  </svg>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <MicIcon />,
      title: "Registro por Voz",
      description: "Diga adeus às anotações: fale e o Economiza Ai registra tudo automaticamente."
    },
    {
      icon: <TagIcon />,
      title: "Categorização Inteligente",
      description: "Identifique seus maiores gastos em segundos"
    },
    {
      icon: <ChartIcon />,
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