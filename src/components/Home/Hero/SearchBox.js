import React, { useState } from "react";
import styles from "./MainSearch.module.css";
import mapPin from "../../../Assets/Icons/MapPin.png";
import Dog from "../../../Assets/Icons/Dog.png";
import Cat from "../../../Assets/Icons/Cat.png";
import Dog_active from "../../../Assets/Icons/Dog_active.png";
import Cat_active from "../../../Assets/Icons/Cat_active.png";

const SearchBox = () => {
  const [activeCard, setActiveCard] = useState("Todos");

  const cardData = [
    { label: "Todos", icon: null, activeIcon: null },
    { label: "Cães", icon: Dog, activeIcon: Dog_active },
    { label: "Gatos", icon: Cat, activeIcon: Cat_active },
  ];

  return (
    <header className={styles.searchBox}>
      <div className={styles.title}>
        <h1>Sua história de amor começa aqui!</h1>
      </div>
      <div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Busque por localização"
          aria-label="Search by location"
        />
        <p className={styles.subtext}>
          <img className={styles.pinIcon} src={mapPin} alt="Map Pin" />
          Utilizar minha localização atual
        </p>
      </div>
      <div className={styles.cardRow}>
        {cardData.map((card) => (
          <div
            key={card.label}
            className={`${styles.card} ${
              activeCard === card.label ? styles.active : ""
            }`}
            onClick={() => setActiveCard(card.label)}
            role="button"
            aria-pressed={activeCard === card.label}
          >
            <p>
              {card.icon && (
                <img
                  src={activeCard === card.label ? card.activeIcon : card.icon}
                  alt={card.label}
                />
              )}
              {card.label}
            </p>
          </div>
        ))}
      </div>
      <button className={styles.CTA} aria-label="Search for animals">
        <p>Buscar animais</p>
      </button>
    </header>
  );
};

export default SearchBox;
