import React from "react";
import styles from "./About.module.css";
import Header2 from "../../components/Headers/Header2/Header2";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Header2 sectionType="About" />
      </div>
      <div className={styles.container}></div>
      <BannerAjuda />
    </div>
  );
};

export default About;
