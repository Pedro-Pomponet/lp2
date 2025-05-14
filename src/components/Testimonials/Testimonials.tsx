import React from 'react';
import styles from './Testimonials.module.css';
import pedro from '../../assets/pedro.png';
import julia from '../../assets/julia.png';
import joao from '../../assets/joao.png';

const testimonials = [
  {
    name: "Pedro Henrique",
    role: "Analista de Sistemas",
    avatar: pedro,
    text: "Eu sempre fui péssimo pra anotar os gastos... até começar a usar o EconomiZap. Hoje, controlo tudo direto no WhatsApp e consigo ver certinho pra onde meu dinheiro tá indo. Finalmente tô conseguindo juntar uma grana no fim do mês.",
    rating: 5
  },
  {
    name: "Julia Izana",
    role: "Empreendedora",
    avatar: julia,
    text: "Facilitou demais minha vida! Eu só mando mensagem com o valor e o que gastei, e pronto, já fica registrado. É como ter um assistente financeiro no bolso. Economizei quase R$500 no primeiro mês só por ter mais noção dos meus gastos.",
    rating: 5
  },
  {
    name: "João Victor",
    role: "Designer Gráfico",
    avatar: joao,
    text: "Já testei vários apps de finanças, mas sempre desistia. O EconomiZap é o único que consegui manter, porque funciona no WhatsApp, que eu já uso todo dia. Simples, rápido e direto ao ponto.",
    rating: 5
  }
];

const Testimonials: React.FC = () => (
  <section className={styles.testimonials}>
    <h2 className={styles.sectionTitle}>O Que Nossos Usuários Dizem</h2>
    <div className={styles.cards}>
      {testimonials.map((t, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.header}>
            <img src={t.avatar} alt={t.name} className={styles.avatar} loading="lazy" />
            <div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.role}>{t.role}</div>
              <div className={styles.rating}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className={styles.star} role="img" aria-label="estrela">★</span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.text}>{t.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
