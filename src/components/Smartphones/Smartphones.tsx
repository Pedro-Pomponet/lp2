import React from 'react';
import styles from './Smartphones.module.css';
import economizaAi1 from '../../assets/economiza-ai-1.png';
import economizaAi2 from '../../assets/economiza-ai-2.png';
import economizaAi3 from '../../assets/economiza-ai-3.png';

const Smartphones: React.FC = () => {
  return (
    <section className={styles.smartphones}>
      <div className={styles.container}>
        <div className={styles.phoneContainer}>
          <div className={styles.phone}>
            <h3>Painel profissional</h3>
            <p>
              Tenha acesso ao seu painel financeiro direto no celular ou computador, com todas as suas informações sempre organizadas. E o melhor: você não precisa preencher nada manualmente – seu assessor no WhatsApp faz tudo por você!
            </p>
            <ul className={styles.checkList}>
              <li>Gráficos de fluxo de caixa</li>
              <li>Organização automatizada</li>
              <li>Experiência prática e acessível</li>
            </ul>
            <img src={economizaAi1} alt="Painel profissional" loading="lazy" />
          </div>

          <div className={styles.phone}>
            <h3>Visualize Tabela de Transações</h3>
            <p>Visualize suas gastos de forma organizada e prática na tabela de transações.</p>
            <img src={economizaAi3} alt="Visualize Tabela de Transações" />
          </div>

          <div className={styles.phone}>
            <h3>Corrigir é rapidinho 😊</h3>
            <p>Mandou um valor errado? Sem stress. O Economizap já entende rapidinho e atualiza tudo pra você.</p>
            <img src={economizaAi2} alt="Corrigir é rapidinho" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smartphones; 