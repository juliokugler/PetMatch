import React, { useEffect, useRef, useState } from "react";
import styles from "./AdoptionSteps.module.css";
import lupa from "../../Assets/Icons/lupa.png";
import prancheta from "../../Assets/Icons/prancheta.png";
import check from "../../Assets/Icons/check.png";
import comemorar from "../../Assets/Icons/comemorar.png";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header/Header";

const AdoptionSteps = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              entry.target.classList.add(styles.animate);
            } else {
              setShouldAnimate(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      const timeout = setTimeout(() => {
        cardRefs.current.forEach((card, index) => {
          if (card) {
            setTimeout(() => card.classList.add(styles.animate), index * 320); //Adjust the delay here
          }
        });
      }, 100); // Adjust the delay here

      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);

  return (
    <div className={styles.container}>
      <Header sectionType="servicos" ref={headerRef} />
      <div className={styles.cardContainer}>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <img src={lupa} alt="lupa" />
          <h3>Encontre seu pet</h3>
          <p>
            Temos animais de todas as idades, raças e tamanhos, cada um com sua
            própria história e personalidade.
          </p>
        </div>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <img src={prancheta} alt="prancheta" />
          <h3>Entre em contato</h3>
          <p>
            Preencha o formulário de interesse aqui e a ONG/protetor entrará em
            contato em até 48h.
          </p>
        </div>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <img src={check} alt="lista de checagem" />
          <h3>Avaliação</h3>
          <p>
            A ONG/ protetor analisará o seu perfil e o perfil do pet. Estando
            tudo certo, você é aprovado.
          </p>
        </div>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <img src={comemorar} alt="comemoração" />
          <h3>Adoção completa!</h3>
          <p>
            Caso seja aprovado na hora pelo voluntário da ONG/protetor, você já
            pode levar seu pet para casa!
          </p>
        </div>
      </div>
      <p className={styles.questions}>
        Restam dúvidas? Leia algumas{" "}
        <u onClick={() => navigate("/FAQ")}>Perguntas Frequentes</u>.
      </p>
    </div>
  );
};

export default AdoptionSteps;
