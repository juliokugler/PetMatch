import React, { useState } from "react";
import hero from "../../../Assets/Images/hero.png";
import styles from "./Hero.module.css";
import mapPin from "../../../Assets/Icons/MapPin.png";
import Dog from "../../../Assets/Icons/Dog.png";
import Cat from "../../../Assets/Icons/Cat.png";
import Dog_active from "../../../Assets/Icons/Dog_active.png";
import Cat_active from "../../../Assets/Icons/Cat_active.png";

const Hero = () => {
  const [activeCard, setActiveCard] = useState("Todos");

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <div className={styles.title}>
          <h1>Sua história de amor começa aqui!</h1>
        </div>
        <div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Busque por localização"
          ></input>
          <p className={styles.subtext}>
            <img className={styles.pinIcon} src={mapPin} alt="Map Pin"></img>
            Utilizar minha localização atual
          </p>
        </div>
        <div className={styles.cardRow}>
          <div
            className={`${styles.card} ${
              activeCard === "Todos" ? styles.active : ""
            }`}
            onClick={() => setActiveCard("Todos")}
          >
            <p>Todos</p>
          </div>
          <div
            className={`${styles.card} ${
              activeCard === "Cães" ? styles.active : ""
            }`}
            onClick={() => setActiveCard("Cães")}
          >
            <p>
              <img
                src={activeCard === "Cães" ? Dog_active : Dog}
                alt="Cachorro"
              ></img>
              Cães
            </p>
          </div>
          <div
            className={`${styles.card} ${
              activeCard === "Gatos" ? styles.active : ""
            }`}
            onClick={() => setActiveCard("Gatos")}
          >
            <p>
              <img
                src={activeCard === "Gatos" ? Cat_active : Cat}
                alt="Gato"
              ></img>
              Gatos
            </p>
          </div>
        </div>
        <button className={styles.CTA}>
          <p>Buscar animais</p>
        </button>
      </div>
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
      <img
        className={styles.image}
        src={hero}
        alt="Imagem Hero de um cachorro com o texto Todos Eles Merecem Um Lar."
      ></img>
    </div>
  );
};

export default Hero;
