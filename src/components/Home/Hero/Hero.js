import React, { useState } from "react";
import hero from "../../../Assets/Images/hero.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container2}>
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </section>
  );
};

export default Hero;
