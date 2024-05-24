import React from "react";
import styles from "./AnimaisProximos.module.css";

import PetCardDisplay from "../PetCardDisplay/PetCardDisplay";
import Header from "../../Headers/Header/Header";

const AnimaisProximos = () => {
  return (
    <div className={styles.container}>
      <Header sectionType="animais proximos" />
      <PetCardDisplay />
    </div>
  );
};

export default AnimaisProximos;
