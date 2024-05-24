import React, { useEffect } from "react";
import styles from "./BuscaPet.module.css";
import Sidebar from "../../components/SearchSidebar/Sidebar";

import PetCardDisplay from "../../components/PetCardDisplay/PetCardDisplay";
import Header2 from "../../components/Headers/Header2/Header2";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";

const BuscaPet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Header2 sectionType="busca pet" />
      </div>
      <div className={styles.container}>
        <Sidebar />
        <PetCardDisplay />
      </div>
      <BannerAjuda />
    </div>
  );
};

export default BuscaPet;
