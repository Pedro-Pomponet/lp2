import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Jéssica Caroline",
    role: "Engenheira de Dados Sênior",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "O Economizap revolucionou a forma como gerencio as finanças do meu negócio. É simples, rápido e muito eficiente!",
    rating: 5
  },
  {
    name: "Eduardo Alves",
    role: "Estagiário",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Eu costumava esquecer de registrar meus gastos, mas com o Economizap, consigo adicionar tudo direto pelo WhatsApp enquanto estou na rua. A categorização automática é uma mão na roda para manter meu controle de dia.",
    rating: 5
  },
  {
    name: "Kesia Bizerra",
    role: "Estudante de Direito",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Ótimo sistema, facilita muito no controle de gastos!",
    rating: 5
  },
];

const Testimonials: React.FC = () => (
  <section className={styles.testimonials}>
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
