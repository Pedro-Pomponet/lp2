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
            <p>Tenha acesso ao seu painel financeiro onde vai avaliar as informações com gráficos e métricas para tomar decisões precisas e manter-se sempre preparado para manter seus compromissos.</p>
            <img src={economizaAi1} alt="Painel profissional" />
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