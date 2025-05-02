import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.headerIcon} role="img" aria-label="Envelope">✉️</span>
          <h2>Fale com a gente</h2>
          <p>Tem alguma dúvida, sugestão ou quer falar com o time do Economizap? Preencha o formulário abaixo!</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} role="img" aria-label="Usuário">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} role="img" aria-label="Envelope">✉️</span>
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} role="img" aria-label="Mensagem">💬</span>
            <textarea
              name="message"
              placeholder="Sua mensagem"
              required
              rows={4}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Enviar mensagem
          </button>
          {sent && (
            <div className={styles.successMsg}>
              <span role="img" aria-label="Sucesso">✅</span> Mensagem enviada com sucesso!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 