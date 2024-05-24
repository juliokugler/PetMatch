import React from "react";
import styles from "./AdoptionSteps.module.css";
import lupa from "../../Assets/Icons/lupa.png";
import prancheta from "../../Assets/Icons/prancheta.png";
import check from "../../Assets/Icons/check.png";
import comemorar from "../../Assets/Icons/comemorar.png";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header/Header";

const AdoptionSteps = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header sectionType="servicos" />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={lupa} alt="lupa"></img>
          <h3>Encontre seu pet</h3>

          <p>
            Temos animais de todas as idades, raças e tamanhos, cada um com sua
            própria história e personalidade.
          </p>
        </div>

        <div className={styles.card}>
          <img src={prancheta} alt="prancheta"></img>
          <h3>Entre em contato</h3>

          <p>
            Preencha o formulário de interesse aqui e a ONG/protetor entrará em
            contato em até 48h.
          </p>
        </div>

        <div className={styles.card}>
          <img src={check} alt="lista de checagem"></img> <h3>Avaliação</h3>
          <p>
            A ONG/ protetor analisará o seu perfil e o perfil do pet. Estando
            tudo certo, você é aprovado.
          </p>
        </div>

        <div className={styles.card}>
          <img src={comemorar} alt="comemoração"></img>{" "}
          <h3>Adoção completa!</h3>
          <p>
            Caso seja aprovado na hora pelo voluntário da ONG/protetor, você já
            pode levar seu pet para casa!
          </p>
        </div>
      </div>{" "}
      <p className={styles.questions}>
        Restam dúvidas? Leia algumas{" "}
        <u onClick={() => navigate("/FAQ")}>Perguntas Frequentes</u>.
      </p>
    </div>
  );
};

export default AdoptionSteps;
