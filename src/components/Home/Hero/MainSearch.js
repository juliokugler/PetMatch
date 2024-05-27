import React, { useState } from "react";
import hero from "../../../Assets/Images/hero.png";
import styles from "./MainSearch.module.css";
import mapPin from "../../../Assets/Icons/MapPin.png";
import Dog from "../../../Assets/Icons/Dog.png";
import Cat from "../../../Assets/Icons/Cat.png";
import Dog_active from "../../../Assets/Icons/Dog_active.png";
import Cat_active from "../../../Assets/Icons/Cat_active.png";
import SearchBox from "./SearchBox";

const MainSearch = () => {
  const [activeCard, setActiveCard] = useState("Todos");

  const cardData = [
    { label: "Todos", icon: null, activeIcon: null },
    { label: "Cães", icon: Dog, activeIcon: Dog_active },
    { label: "Gatos", icon: Cat, activeIcon: Cat_active },
  ];

  return (
    <div>
      <section className={styles.container}>
        <div className={styles.waveContainer}>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
        </div>
      </section>
      <SearchBox />
    </div>
  );
};

export default MainSearch;
