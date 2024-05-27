import React, { useEffect } from "react";
import styles from "./PetDetails.module.css";
import PetDetailsContainer from "../../components/PetDetails/PetDetailsContainer";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";

const PetDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.petDetailsContainer}>
        <PetDetailsContainer />
      </div>
      <BannerAjuda />
    </div>
  );
};

export default PetDetails;
