import React, { useState, useEffect } from "react";
import styles from "./GPS.module.css";
import GPSImage from "../../Assets/Images/gps.png";

const GPS = ({ ONG }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay before triggering the animation to ensure the component is rendered first
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.container} ${loaded ? styles.loaded : ""}`}>
      <div className={styles.search}>
        <label>
          <input placeholder="Seu Endereço"></input>
        </label>
        <label>
          <input placeholder={ONG}></input>
        </label>
        <p>
          <strong>{ONG}</strong>
        </p>
      </div>
      <img src={GPSImage}></img>
    </div>
  );
};

export default GPS;
