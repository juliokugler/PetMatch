import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import petData from "../../Assets/JSON/Pets.json";
import styles from "./PetDetails.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import GPS from "../../components/GPS/GPS";

const { dogs } = petData;

const PetDetails = () => {
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
          <FaArrowLeft /> <h3>Voltar à Lista</h3>
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
                <p>Sexo</p>
                <p>{pet.sexo}</p>
              </div>
              <div className={styles.infoCard}>
                <p>Porte</p>
                <p>{pet.porte}</p>
              </div>
              <div className={styles.infoCard}>
                <p>Idade</p>
                <p>{pet.idade}</p>
              </div>
              <div className={styles.infoCard}>
                <p>Raça</p>
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
                <p>ONG</p>
                <p>{pet.ONG}</p>
              </div>
              <div className={styles.infoCard}>
                <p>Localização</p>
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
          <button className={styles.adoptButton}>Quero adotar!</button>
          <button className={styles.favoriteButton}>Favoritar</button>
          <button className={styles.shareButton}>Compartilhar</button>
        </div>

        <div className={styles.ongInfoContainer}>
          <div className={styles.ongHeader}>
            <h3>{pet.ONG}</h3>
            <img
              src="/path/to/stars.png"
              alt="Rating"
              className={styles.stars}
            />
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

export default PetDetails;
