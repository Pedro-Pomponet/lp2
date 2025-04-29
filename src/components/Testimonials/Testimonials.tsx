import React from 'react';
import styles from './Testimonials.module.css';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Souza",
    role: "CEO na StartupX",
    text: "A plataforma superou minhas expectativas! Fácil de usar e com suporte incrível.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Lima",
    role: "Desenvolvedor Frontend",
    text: "O design é moderno e a performance excelente. Recomendo para todos os profissionais.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Juliana Alves",
    role: "Empreendedora",
    text: "Me ajudou a organizar meu negócio e conquistar mais clientes. Muito satisfeita!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimoniais" className={styles.testimonials}>
      <div className={styles.container}>
        <h2>Depoimentos</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, idx) => (
            <div className={styles.testimonialCard} key={idx}>
              <div className={styles.avatarBox}>
                <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
              </div>
              <p className={styles.text}>&ldquo;{testimonial.text}&rdquo;</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
