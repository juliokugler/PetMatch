import React from "react";
import styles from "./Testimonials.module.css";
import waveTop from "./waveTop.png";
import waveBottom from "./waveBottom.png";
import stars from "./Stars.png";
import petOwner from "../../../Assets/Images/petOwner.png";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <img className={styles.waveBorder} src={waveTop}></img>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <img src={stars}></img>
          <h3 className={styles.text}>
            "Adotar o Dom pela PetMatch foi uma decisão incrível! Nossa casa
            agora é sempre alegre e cheia de amor. Obrigado, PetMatch, por nos
            dar essa chance de transformar nossa família para sempre!"
          </h3>

          <p>
            <span>Marcelo Santos</span>
          </p>
          <p> Tutor do Dom</p>
        </div>

        <div className={styles.imageContainer}>
          <img src={petOwner}></img>
        </div>
      </div>
      <img className={styles.waveBorder} src={waveBottom}></img>
    </div>
  );
};

export default Testimonials;
