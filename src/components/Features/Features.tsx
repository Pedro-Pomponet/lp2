import React from 'react';
import styles from './Features.module.css';

// Importando imagens SVG
import walletIcon from '../../assets/icons/wallet.svg';
import bellIcon from '../../assets/icons/bell.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';
import microphoneIcon from '../../assets/icons/microphone.svg';
import chartPieIcon from '../../assets/icons/chart-pie.svg';
import chartLineIcon from '../../assets/icons/chart-line.svg';

const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Que tal finalmente organizar sua vida financeira?</h2>
          <p>Simplifique suas contas, economize dinheiro e prospere sem abrir planilhas e direto no WhatsApp.</p>
        </div>
        
        <div className={styles.tablesContainer}>
          {/* Tabela 1: Gestão Financeira */}
          <div className={styles.tableWrapper}>
            <table className={styles.featureTable}>
              <thead>
                <tr>
                  <th colSpan={2}>Gestão Financeira</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.iconCell}>
                    <img src={walletIcon} alt="Carteira" className={styles.icon} />
                  </td>
                  <td>
                    <h3>Gerencie seu orçamento</h3>
                    <p>Categorize seus gastos</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <img src={bellIcon} alt="Sino" className={styles.icon} />
                  </td>
                  <td>
                    <h3>Receba lembretes</h3>
                    <p>De contas a pagar</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <img src={invoiceIcon} alt="Fatura" className={styles.icon} />
                  </td>
                  <td>
                    <h3>Emita boletos</h3>
                    <p>Para cobranças</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Tabela 2: Automação */}
          <div className={styles.tableWrapper}>
            <table className={styles.featureTable}>
              <thead>
                <tr>
                  <th colSpan={2}>Automação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.iconCell}>
                    <img src={microphoneIcon} alt="Microfone" className={styles.icon} />
                  </td>
                  <td>
                    <h3>Registro por Voz</h3>
                    <p>Diga adeus às anotações: fale e o Economizap registra tudo automaticamente.</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <img src={chartPieIcon} alt="Gráfico de Pizza" className={styles.icon} />
                  </td>
                  <td>
                    <h3>Categorização Inteligente</h3>
                    <p>Identifique seus maiores gastos em segundos</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Tabela 3: Análise */}
          <div className={styles.tableWrapper}>
            <table className={styles.featureTable}>
              <thead>
                <tr>
                  <th colSpan={2}>Análise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.iconCell}>
                    <img src={chartLineIcon} alt="Gráfico de Linha" className={styles.icon} />
                  </td>
                  <td>
                    <h3>Relatórios Automáticos</h3>
                    <p>Saiba exatamente onde seu dinheiro está indo com insights personalizados</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;