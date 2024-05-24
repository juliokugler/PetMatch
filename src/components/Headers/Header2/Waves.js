import React from "react";
import styles from "./WaveContainer.module.css";

const WaveContainer = ({ sectionType }) => {
  return (
    <div className={styles.WaveContainer}>
      <div className={styles.wave}></div>
    </div>
  );
};

export default WaveContainer;
