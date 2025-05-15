import React from 'react';
import styles from './Smartphones.module.css';
import Images from '../../assets';
import SafeImage from '../SafeImage/SafeImage';

const Smartphones: React.FC = () => {
  return (
    <section className={styles.smartphones}>
      <h2 className={styles.sectionTitle}>Disponível em Todos os Dispositivos</h2>
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
            <SafeImage 
              src={Images.economizaAi.painel} 
              alt="Painel profissional" 
              className={styles.phoneImage}
            />
          </div>

          <div className={styles.phone}>
            <h3>Visualize Tabela de Transações</h3>
            <p>Visualize suas gastos de forma organizada e prática na tabela de transações.</p>
            <SafeImage 
              src={Images.economizaAi.transacoes} 
              alt="Visualize Tabela de Transações" 
              className={styles.phoneImage}
            />
          </div>

          <div className={styles.phone}>
            <h3>Corrigir é rapidinho 😊</h3>
            <p>Mandou um valor errado? Sem stress. O Economizap já entende rapidinho e atualiza tudo pra você.</p>
            <SafeImage 
              src={Images.economizaAi.correcao} 
              alt="Corrigir é rapidinho" 
              className={styles.phoneImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smartphones; 