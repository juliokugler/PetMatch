import React from "react";
import styles from "./SearchPet.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchPet = () => {
  return (
    <div className={styles.container}>
      <form>
        <label className={styles.searchLabel}>
          <p>Tipo de Pet:</p>
          <select>
            <option>Selecione o tipo de Pet</option>
            <option>Cachorro</option>
            <option>Gato</option>
            <option>Outros</option>
          </select>
        </label>
        <label className={styles.searchLabel}>
          <p>Sexo:</p>
          <select>
            <option>Selecione o Sexo</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Todos</option>
          </select>
        </label>
        <label className={styles.searchLabel}>
          <p>Idade:</p>
          <select>
            <option>Selecione a Idade</option>
            <option>Todas as Idades</option>
            <option>De 0 a 1 Ano</option>
            <option>De 2 a 5 Anos</option>
            <option>De 5 a 10 Anos</option>
            <option>Mais de 10 Anos</option>
          </select>
        </label>
        <label className={styles.searchLabel}>
          <p>Área de Busca:</p>
          <input placeholder="Selecione a Área de Busca"></input>
        </label>
        <button className={styles.searchButton}>
          <p>Buscar</p> <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  );
};

export default SearchPet;
