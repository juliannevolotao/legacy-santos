import { useState } from "react";
import styles from "./styles.module.css";

const faqData = [
  {
    question: "Onde vai acontecer a conferência?",
    answer:
      "A conferência acontecerá na Igreja Lagoinha, em Santos - São Paulo. O endereço completo será enviado por e-mail após a confirmação da sua inscrição.",
  },
  {
    question: "A partir de que idade posso participar?",
    answer:
      "O evento é voltado para jovens mas todos são bem-vindos! Não há restrição de idade, então traga seus amigos, familiares e quem mais quiser.",
  },
  {
    question: "O que está incluso no ingresso?",
    answer:
      "Seu ingresso dá acesso completo a todos os momentos da conferência.",
  },
  {
    question: "Vai ter venda de comida no local?",
    answer:
      "Sim! Teremos praça de alimentação com opções acessíveis durante todos os dias do evento.",
  },
  {
    question: "E se eu não puder ir depois de comprar?",
    answer:
      "Infelizmente, os ingressos não são reembolsáveis. Mas você pode transferir para outra pessoa — basta nos avisar com antecedência.",
  },
  {
    question: "Vocês vão divulgar os preletores antes do evento?",
    answer:
      "Sim... em breve. 👀 Fique de olho no Instagram oficial e nesta página para descobrir quem vai estar com a gente.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h2 className={styles.title}>Perguntas Frequentes</h2>
        <ul className={styles.faqList}>
          {faqData.map((item, index) => (
            <li key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleIndex(index)}
              >
                {item.question}
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.answer} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
