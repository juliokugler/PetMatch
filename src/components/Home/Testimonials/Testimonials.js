import React from "react";
import styles from "./Testimonials.module.css";
import waveTop from "../../../Assets/Images/waveTop.png";
import waveBottom from "../../../Assets/Images/waveBottom.png";
import petOwner from "../../../Assets/Images/petOwner.png";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <div className={styles.container}>
      <img className={styles.waveBorder} src={waveTop}></img>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <div className={styles.starsContainer}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className={styles.text}>
            "Adotar o Dom pela PetMatch foi uma decisão incrível! Nossa casa
            agora é sempre alegre e cheia de amor. Obrigado, PetMatch, por nos
            dar essa chance de transformar nossa família para sempre!"
          </h3>
          <div className={styles.nameAndIcons}>
            <div>
              <p>
                <span>Marcelo Santos</span>
              </p>
              <p> Tutor do Dom</p>
            </div>{" "}
            <div className={styles.pagination}>
              <div className={styles.pageBox}>
                <FaArrowLeft />
              </div>
              <div className={styles.pageBox}>
                <FaArrowRight />
              </div>
            </div>
          </div>
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
