import React, { useEffect } from "react";
import styles from "./FAQ.module.css";
import Header2 from "../../components/Headers/Header2/Header2";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";
import FAQContainer from "../../components/FAQ/FAQContainer";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Header2 sectionType="FAQ" />
      </div>
      <div className={styles.container}>
        <FAQContainer />
      </div>
      <BannerAjuda />
    </div>
  );
};

export default FAQ;
