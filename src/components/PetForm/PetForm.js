import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import styles from "./PetForm.module.css";
import CatAndDog from "../../Assets/Images/catanddog.png";

const PetForm = () => {
  const [animalType, setAnimalType] = useState("dog");
  const [animalInfo, setAnimalInfo] = useState({
    name: "",
    sexo: "macho",
    local: "",
    ONG: "",
    comportamento: "",
    idade: "Filhote",
    raca: "",
    porte: "Pequeno",
    image: "",
    sobre: "",
  });
  const [racaType, setRacaType] = useState("SNR");

  const handleTypeChange = (e) => {
    setAnimalType(e.target.value);
  };

  const handleChange = (e) => {
    setAnimalInfo({
      ...animalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleRacaTypeChange = (e) => {
    setRacaType(e.target.value);
    if (e.target.value === "SNR") {
      setAnimalInfo({ ...animalInfo, raca: "SNR" });
    } else {
      setAnimalInfo({ ...animalInfo, raca: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, animalType === "dog" ? "dogs" : "cats"), {
        ...animalInfo,
        comportamento: animalInfo.comportamento
          .split(",")
          .map((item) => item.trim()),
      });
      alert("Animal information submitted successfully!");
      setAnimalInfo({
        name: "",
        sexo: "macho",
        local: "",
        ONG: "",
        comportamento: "",
        idade: "Filhote",
        raca: "",
        porte: "Pequeno",
        image: "",
        sobre: "",
      });
      setRacaType("SNR");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form className={styles.animalForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <div className={styles.imagePreview}>
          {animalInfo.image ? (
            <img src={animalInfo.image} alt="Animal preview" />
          ) : (
            <img src={CatAndDog} alt="Animal preview" />
          )}
        </div>
        <div className={styles.inputFields}>
          <div className={styles.selectGroup}>
            <label htmlFor="animalType" className={styles.label}>
              Tipo de Animal:
            </label>
            <select
              id="animalType"
              value={animalType}
              onChange={handleTypeChange}
              required
            >
              <option value="dog">Cachorro</option>
              <option value="cat">Gato</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={animalInfo.name}
              onChange={handleChange}
              required
            />
            <label className={styles.label}>Sexo:</label>
            <select
              name="sexo"
              value={animalInfo.sexo}
              onChange={handleChange}
              required
            >
              <option value="macho">Macho</option>
              <option value="femea">Fêmea</option>
            </select>
            <label className={styles.label}>Local:</label>
            <input
              type="text"
              name="local"
              placeholder="Local"
              value={animalInfo.local}
              onChange={handleChange}
              required
            />
            <label className={styles.label}>Nome da ONG:</label>
            <input
              type="text"
              name="ONG"
              placeholder="ONG"
              value={animalInfo.ONG}
              onChange={handleChange}
              required
            />
            <label className={styles.label}>Idade:</label>
            <select
              name="idade"
              value={animalInfo.idade}
              onChange={handleChange}
              required
            >
              <option value="Filhote">Filhote</option>
              <option value="Jovem">Jovem</option>
              <option value="Adulto">Adulto</option>
              <option value="Idoso">Idoso</option>
            </select>
            <label className={styles.label}>Raça:</label>
            <div className={styles.radioGroup}>
              <input
                type="radio"
                id="SNR"
                name="racaType"
                value="SNR"
                checked={racaType === "SNR"}
                onChange={handleRacaTypeChange}
                className={styles.hiddenRadio}
              />
              <label htmlFor="SNR" className={styles.customRadio}></label>
              <label htmlFor="SNR" className={styles.radioLabel}>
                SNR
              </label>
              <input
                type="radio"
                id="other"
                name="racaType"
                value="other"
                checked={racaType === "other"}
                onChange={handleRacaTypeChange}
                className={styles.hiddenRadio}
              />
              <label htmlFor="other" className={styles.customRadio}></label>
              <label htmlFor="other" className={styles.radioLabel}>
                Outro
              </label>
              {racaType === "other" && (
                <input
                  type="text"
                  name="raca"
                  placeholder="Raça"
                  value={animalInfo.raca}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            <label className={styles.label}>Porte:</label>
            <select
              name="porte"
              value={animalInfo.porte}
              onChange={handleChange}
              required
            >
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
            <label className={styles.label}>Foto do Pet:</label>
            <input
              type="url"
              name="image"
              placeholder="URL da Foto"
              value={animalInfo.image}
              onChange={handleChange}
              required
            />
            <label className={styles.label}>Sobre o Pet:</label>
            <textarea
              name="sobre"
              placeholder="Sobre"
              value={animalInfo.sobre}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default PetForm;
