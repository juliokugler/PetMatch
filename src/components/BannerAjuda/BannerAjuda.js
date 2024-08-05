import React from "react";
import styles from "./BannerAjuda.module.css";
import catPeaking from "../../Assets/Images/Cat.png";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const BannerAjuda = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
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
          <img src={catPeaking} alt="gato"></img>
        </div>
      </div>
    </div>
  );
};

export default BannerAjuda;
