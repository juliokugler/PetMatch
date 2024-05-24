import React from "react";
import styles from "./PetMatchInfo.module.css";
import waveTop from "./waveTop.png";
import waveBottom from "./waveBottom.png";

const PetMatchInfo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.waveBorder} src={waveTop}></img>
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
        <div className={styles.card}>
          <h1>1.8 mil+</h1>
          <p>Animais adotados</p>
        </div>
        <div className={styles.card}>
          <h1>100+</h1>
          <p>Toneladas de ração doadas</p>
        </div>
        <div className={styles.card}>
          <h1>140+</h1>
          <p>PNGs/protetores cadastrados</p>
        </div>
        <div className={styles.card}>
          <h1>R$3.4 mi+</h1>
          <p>Arrecadados para ONGs</p>
        </div>
      </div>
      <img className={styles.waveBorder} src={waveBottom}></img>
    </div>
  );
};

export default PetMatchInfo;
