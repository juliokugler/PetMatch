import React from "react";
import styles from "./BannerAjuda.module.css";
import imageCollage from "../../Assets/Images/Contents.png";
import { useNavigate } from "react-router-dom";
import waveTop from "../../Assets/Images/waveTop.png";
import waveBottom from "../../Assets/Images/waveBottom.png";
import { FaHeart } from "react-icons/fa";

const BannerAjuda = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.waveBorder} src={waveTop}></img>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <h1>
            Qualquer ajuda faz <span>toda</span> a diferença!
          </h1>
          <p>Mude a vida de um animal hoje.</p>
          <button
            onClick={() => navigate("/contribuir")}
            className={styles.button}
          >
            <p>
              {" "}
              Contribua com qualquer valor <FaHeart />
            </p>
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={imageCollage} alt="montagem de fotos pet"></img>
        </div>
      </div>
      <img className={styles.waveBorder} src={waveBottom}></img>
    </div>
  );
};

export default BannerAjuda;
