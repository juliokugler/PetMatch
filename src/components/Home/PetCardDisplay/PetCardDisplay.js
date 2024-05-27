import React from "react";
import styles from "./PetCardDisplay.module.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import petData from "../../../Assets/JSON/Pets.json";

const { dogs } = petData;

const PetCardDisplay = () => {
  const navigate = useNavigate();

  const handleDogClick = (id) => {
    navigate(`/busca-pet/${id}`);
  };

  return (
    <div className={styles.container}>
      <ul>
        {dogs.slice(0, 8).map((dog) => (
          <li key={dog.id} onClick={() => handleDogClick(dog.id)}>
            <div
              className={styles.card}
              style={{ backgroundImage: `url(${dog.image})` }}
            >
              {" "}
            </div>
            <div className={styles.cardContent}>
              <h3>{dog.name}</h3>
              <p>
                {dog.local} <span>•</span> {dog.sexo} {dog.idade}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/busca-pet")} className={styles.button}>
        <p>Ver todos os animais </p> <FaArrowRight />
      </button>
    </div>
  );
};

export default PetCardDisplay;
