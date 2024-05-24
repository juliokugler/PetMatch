import React, { useState } from "react";
import styles from "./FAQContainer.module.css";

const FAQContainer = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "Quem pode realizar uma adoção?",
      answer: "Qualquer pessoa maior de 18 anos pode realizar uma adoção.",
    },
    {
      question: "O que é preciso para adotar um pet?",
      answer:
        "É necessário preencher um formulário de adoção e passar por uma entrevista.",
    },
    {
      question: "Quais são os documentos necessários para uma adoção?",
      answer:
        "Você precisará de um documento de identidade e um comprovante de residência.",
    },
    {
      question:
        "Após o preenchimento do formulário, quanto tempo devo aguardar?",
      answer:
        "O tempo de resposta pode variar, mas geralmente leva de 3 a 5 dias úteis.",
    },
    {
      question: "Fui aprovado, posso retirar o pet no mesmo dia?",
      answer: "Sim, após a aprovação, você pode retirar o pet no mesmo dia.",
    },
    {
      question: "Os animais que vão para adoção são castrados?",
      answer: "Sim, todos os animais disponíveis para adoção são castrados.",
    },
    {
      question: "Os animais que vão para adoção são vacinados?",
      answer: "Sim, todos os animais são vacinados antes da adoção.",
    },
    {
      question: "Os animais que vão para adoção são sociáveis?",
      answer: "Sim, todos os animais passam por um processo de socialização.",
    },
    {
      question: "Tem alguma taxa para adoção?",
      answer:
        "Sim, há uma taxa simbólica para ajudar nos custos de cuidado dos animais.",
    },
    {
      question: "Adotei um pet e ele não se adaptou, é possível a devolução?",
      answer: "Sim, em casos de não adaptação, a devolução pode ser feita.",
    },
  ];

  return (
    <div className={styles.container}>
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className={styles.questionBlock}>
          <div
            className={styles.questionHeader}
            onClick={() => toggleQuestion(index)}
          >
            <p>{qa.question}</p>
            <button className={styles.toggleButton}>
              {openQuestion === index ? "-" : "+"}
            </button>
          </div>
          {openQuestion === index && (
            <p className={styles.answer}>
              <span>{qa.answer}</span>
            </p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQContainer;
