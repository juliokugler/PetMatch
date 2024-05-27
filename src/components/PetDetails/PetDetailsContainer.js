import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import petData from "../../Assets/JSON/Pets.json";
import styles from "./PetDetailsContainer.module.css";
import { FaArrowLeft, FaHeart, FaStar } from "react-icons/fa6";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import sealCheck from "../../Assets/Icons/SealCheck.png";
import GPS from "../GPS/GPS";

const { dogs } = petData;

const PetDetailsContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pet = dogs.find((pet) => pet.id === parseInt(id));

  if (!pet) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    navigate(`/busca-pet/`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.petDetailsContainer}>
        <div className={styles.backOption} onClick={handleBackClick}>
          <FaArrowLeft /> <h3>Voltar Lista</h3>
        </div>

        <div className={styles.petCard}>
          <img className={styles.petImage} src={pet.image} alt={pet.name} />
          <div className={styles.petInfoContainer}>
            <div className={styles.nameAndInfo}>
              <h2>{pet.name}</h2>
              <p className={styles.petId}>#{pet.id}</p>
            </div>
            <div className={styles.cardRow}>
              <div className={styles.infoCard}>
                <p className={styles.title}>Sexo</p>
                <p>{pet.sexo}</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.title}>Porte</p>
                <p>{pet.porte}</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.title}>Idade</p>
                <p>{pet.idade}</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.title}>Raça</p>
                <p>{pet.raca}</p>
              </div>
            </div>
            <div className={styles.tagContainer}>
              {pet.comportamento.map((comportamento, index) => (
                <li className={styles.tag} key={index}>
                  {comportamento}
                </li>
              ))}
            </div>
            <div className={styles.cardRow}>
              <div className={styles.infoCard}>
                <p className={styles.title}>ONG</p>
                <div className={styles.ongAndIcon}>
                  <p>{pet.ONG}</p>
                  <img src={sealCheck} alt="Selo de ONG Verificada"></img>
                </div>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.title}>Localização</p>
                <p>{pet.local}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutSection}>
          <h2>Minha história</h2>
          <p>{pet.sobre}</p>
        </div>

        <div className={styles.buttonsContainer}>
          <button className={styles.adoptButton}>
            <p>Quero adotar !</p>
          </button>
          <button className={styles.favoriteButton}>
            <p>Favoritar</p>
            <FaHeart className={styles.heartIcon} />
          </button>
          <button className={styles.shareButton}>
            <p>Compartilhar</p>
          </button>
        </div>

        <div className={styles.ongInfoContainer}>
          <div className={styles.ongHeader}>
            <h3>{pet.ONG}</h3>
            <div className={styles.starsContainer}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
      <GPS ONG={pet.ONG} />
    </div>
  );
};

export default PetDetailsContainer;
