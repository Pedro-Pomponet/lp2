import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Ana Souza",
    role: "Empresária",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "O Economizap mudou minha relação com o dinheiro! Agora consigo controlar meus gastos e planejar melhor meus sonhos.",
    rating: 5
  },
  {
    name: "Carlos Lima",
    role: "Autônomo",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Simples, prático e eficiente. Recomendo para todos que querem ter uma vida financeira mais saudável.",
    rating: 5
  },
  {
    name: "Juliana Pereira",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "A interface é intuitiva e os gráficos me ajudam a entender para onde meu dinheiro está indo. Adorei!",
    rating: 5
  },
];

const Testimonials: React.FC = () => (
  <section className={styles.testimonials}>
    <h2 className={styles.title}>O que dizem nossos usuários</h2>
    <div className={styles.cards}>
      {testimonials.map((t, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.avatarContainer}>
            <img src={t.avatar} alt={t.name} className={styles.avatar} loading="lazy" />
            <div className={styles.rating}>
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className={styles.star} role="img" aria-label="estrela">⭐</span>
              ))}
            </div>
          </div>
          <p className={styles.text}>"{t.text}"</p>
          <div className={styles.userInfo}>
            <span className={styles.name}>{t.name}</span>
            <span className={styles.role}>{t.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
