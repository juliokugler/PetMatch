import React from "react";
import styles from "./Header2.module.css";
import pawsRight from "../../../Assets/Images/pawsRight.png";
import pawsLeft from "../../../Assets/Images/pawsLeft.png";
import waveBottom from "./waveBottom.png"; // Ensure you import the wave image

const Header2 = ({ sectionType }) => {
  let headerContent = null;
  let subtextContent = null;
  switch (sectionType) {
    case "busca pet":
      subtextContent = (
        <p>
          <span>10.000 animais cadastrados</span>
        </p>
      );
      headerContent = (
        <div className={styles.pageGreeting}>
          <h1>Animais para adoção</h1>
        </div>
      );
      break;
    case "blog":
      subtextContent = (
        <p>
          <span>Blog PetMatch</span>
        </p>
      );
      headerContent = <h1>Saiba tudo sobre cuidar de seu novo amigo</h1>;
      break;
    case "Announce":
      subtextContent = (
        <p>
          <span>Anuncie na PetMatch</span>
        </p>
      );
      headerContent = <h1>Anuncie um pet para doação</h1>;
      break;

    case "About":
      subtextContent = (
        <p>
          <span>Sobre a causa</span>
        </p>
      );
      headerContent = <h1>Saiba mais sobre a PetMatch</h1>;
      break;
    case "FAQ":
      subtextContent = (
        <p>
          <span>FAQ</span>
        </p>
      );
      headerContent = <h1>Perguntas frequentes sobre a adoção</h1>;
      break;
    case "Donations":
      subtextContent = (
        <p>
          <span>Contribuir</span>
        </p>
      );
      headerContent = <h1>Sua contribuição ajuda vidas</h1>;
      break;

    default:
      headerContent = null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.messageBanner}>
        <img
          className={styles.pawsImage}
          src={pawsLeft}
          alt="Patas de cachorro"
        />
        <div className={styles.messageBannerText}>
          {subtextContent}
          {headerContent}
        </div>
        <img
          className={styles.pawsImage}
          src={pawsRight}
          alt="Patas de cachorro"
        />
      </div>
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default Header2;
