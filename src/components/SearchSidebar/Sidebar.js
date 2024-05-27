import React from "react";
import styles from "./Sidebar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import FilterSection from "../FilterSection/FilterSection";
import { FaSearch } from "react-icons/fa";
import searchIcon from "../../Assets/Icons/search.png";
import mapPin from "../../Assets/Icons/MapPin.png";

const speciesOptions = [
  { value: "todos", label: "Todos", defaultChecked: true },
  { value: "caes", label: "Cães" },
  { value: "gatos", label: "Gatos" },
];

const genderOptions = [
  { value: "todos", label: "Todos", defaultChecked: true },
  { value: "macho", label: "Macho" },
  { value: "femea", label: "Fêmea" },
];

const sizeOptions = [
  { value: "todos", label: "Todos", defaultChecked: true },
  { value: "pequeno", label: "Pequeno" },
  { value: "medio", label: "Médio" },
  { value: "grande", label: "Grande" },
];

const ageOptions = [
  { value: "todos", label: "Todos", defaultChecked: true },
  { value: "jovem", label: "Jovem" },
  { value: "adulto", label: "Adulto" },
  { value: "idoso", label: "Idoso" },
  { value: "filhote", label: "Filhote" },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonRow}>
        <p>Filtros</p>
        <p>Limpar</p>
      </div>
      <form>
        <label className={styles.searchLabel}>
          <p>Localização</p>
          <input placeholder="Selecione a Área de Busca" />
          <img className={styles.searchIcon} src={searchIcon} alt="lupa" />

          <div className={styles.useCurrentLocation}>
            {" "}
            <img
              className={styles.mapPin}
              src={mapPin}
              alt="Pin de Localização"
            />
            <p>Utilizar minha localização atual</p>
          </div>
        </label>
        <section className={styles.section}>
          <FilterSection
            title="Espécie"
            name="species"
            options={speciesOptions}
          />
          <FilterSection title="Sexo" name="gender" options={genderOptions} />
        </section>
        <section className={styles.section}>
          <FilterSection title="Porte" name="size" options={sizeOptions} />
          <FilterSection title="Idade" name="age" options={ageOptions} />
        </section>
        <button className={styles.searchButton}>
          <p>Aplicar Filtros</p>
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
