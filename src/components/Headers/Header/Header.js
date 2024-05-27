import React from "react";
import styles from "./Header.module.css";
import dog_line from "./dog_line.png";
import cat_line from "./cat_line.png";
const Header = ({ sectionType }) => {
  let headerContent = null;
  let subtextContent = null;
  switch (sectionType) {
    case "animais proximos":
      subtextContent = (
        <p>
          {" "}
          <span>Mais perto do que você imagina!</span>
        </p>
      );
      headerContent = (
        <div className={styles.pageGreeting}>
          <h1>
            Estes animais estão próximos a <br />
            você e ansiosos por um novo lar!
          </h1>
        </div>
      );
      break;
    case "servicos":
      subtextContent = (
        <p>
          {" "}
          <span>Adote em quatro patas</span>
        </p>
      );
      headerContent = (
        <h1>
          Se você tem amor,
          <br /> há um pet que precisa dele.
        </h1>
      );
      break;

    default:
      headerContent = null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.messageBanner}>
        <img
          className={styles.catImage}
          src={cat_line}
          alt="Gato traço em linha"
        ></img>
        <div className={styles.messageBannerText}>
          {subtextContent}
          {headerContent}
        </div>
        <img
          className={styles.dogImage}
          src={dog_line}
          alt="Cachorro traço em linha"
        ></img>
      </div>
    </div>
  );
};

export default Header;
