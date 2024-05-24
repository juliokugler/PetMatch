import React from "react";
import styles from "./Favorited.module.css";
import FavoritedDisplay from "../../components/FavoritedDisplay/FavoritedDisplay";

const Favorited = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Pets Favoritados</h1>
      <FavoritedDisplay />
    </div>
  );
};

export default Favorited;
