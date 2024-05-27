import React, { useEffect, useRef, useState } from "react";
import styles from "./PetMatchInfo.module.css";
import waveTop from "../../Assets/Images/waveTop.png";
import waveBottom from "../../Assets/Images/waveBottom.png";

const PetMatchInfo = () => {
  const cardRefs = useRef([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => card.classList.add(styles.animate), index * 320); // Adjust the delay here
        }
      });
    }
  }, [shouldAnimate]);

  return (
    <div className={styles.container}>
      <img className={styles.waveBorder} src={waveTop} alt="waveTop" />
      <div className={styles.row}>
        <h2 className={styles.text}>
          Juntos, nós ajudamos animais e ONGs do Brasil inteiro.
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <h1>1.8 mil+</h1>
          <p>Animais adotados</p>
        </div>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <h1>100+</h1>
          <p>Toneladas de ração doadas</p>
        </div>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <h1>140+</h1>
          <p>ONGs/Protetores cadastrados</p>
        </div>
        <div
          className={`${styles.card}`}
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <h1>R$3.4 mi+</h1>
          <p>Arrecadados para ONGs</p>
        </div>
      </div>
      <img className={styles.waveBorder} src={waveBottom} alt="waveBottom" />
    </div>
  );
};

export default PetMatchInfo;
