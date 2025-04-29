import React from 'react';
import styles from './Smartphones.module.css';
import iphone from '../../assets/iPhone14Pro.png';

const Smartphones: React.FC = () => {
  return (
    <section className={styles.smartphones}>
      <div className={styles.container}>
        <div className={styles.phoneContainer}>
          <div className={styles.phone}>
            <img src={iphone} alt="Painel profissional" />
            <h3>Painel profissional</h3>
            <p>Tenha acesso ao seu painel financeiro onde vai avaliar as informações com gráficos e métricas para tomar decisões precisas e manter-se sempre preparado para manter seus compromissos.</p>
          </div>

          <div className={styles.phone}>
            <img src={iphone} alt="Visualize Tabela de Transações" />
            <h3>Visualize Tabela de Transações</h3>
            <p>Visualize suas gastos de forma organizada e prática na tabela de transações.</p>
          </div>

          <div className={styles.phone}>
            <img src={iphone} alt="Corrigir é rapidinho" />
            <h3>Corrigir é rapidinho 😊</h3>
            <p>Mandou um valor errado? Sem stress. O Economizap já entende rapidinho e atualiza tudo pra você.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smartphones; 