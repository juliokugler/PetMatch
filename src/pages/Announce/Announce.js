import React from "react";
import styles from "./Announce.module.css";
import Header2 from "../../components/Headers/Header2/Header2";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";
import PetForm from "../../components/PetForm/PetForm";

const Announce = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Header2 sectionType="Announce" />
      </div>
      <div className={styles.container}>
        <PetForm />
      </div>
      <BannerAjuda />
    </div>
  );
};

export default Announce;
