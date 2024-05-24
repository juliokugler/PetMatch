import React from "react";
import styles from "./Sidebar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
          <p className={styles.useCurrentLocation}>
            Utilizar minha localização atual
          </p>
        </label>

        <div className={styles.filterContainer}>
          <p>Espécie:</p>
          <div>
            <label>
              <input
                type="radio"
                name="species"
                value="todos"
                className={styles.hiddenRadio}
                defaultChecked
              />
              <div className={styles.customRadio}></div>
              Todos
            </label>
            <label>
              <input
                type="radio"
                name="species"
                value="caes"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Cães
            </label>
            <label>
              <input
                type="radio"
                name="species"
                value="gatos"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Gatos
            </label>
          </div>
        </div>

        <div className={styles.filterContainer}>
          <p>Sexo:</p>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="todos"
                className={styles.hiddenRadio}
                defaultChecked
              />
              <div className={styles.customRadio}></div>
              Todos
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="macho"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Macho
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="femea"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Fêmea
            </label>
          </div>
        </div>

        <div className={styles.filterContainer}>
          <p>Porte:</p>
          <div>
            <label>
              <input
                type="radio"
                name="size"
                value="todos"
                className={styles.hiddenRadio}
                defaultChecked
              />
              <div className={styles.customRadio}></div>
              Todos
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="pequeno"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Pequeno
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="medio"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Médio
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="grande"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Grande
            </label>
          </div>
        </div>

        <div className={styles.filterContainer}>
          <p>Idade:</p>
          <div>
            <label>
              <input
                type="radio"
                name="age"
                value="todos"
                className={styles.hiddenRadio}
                defaultChecked
              />
              <div className={styles.customRadio}></div>
              Todos
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="jovem"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Jovem
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="adulto"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Adulto
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="idoso"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Idoso
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="filhote"
                className={styles.hiddenRadio}
              />
              <div className={styles.customRadio}></div>
              Filhote
            </label>
          </div>
        </div>

        <button className={styles.searchButton}>
          <p>Aplicar Filtros</p>
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
