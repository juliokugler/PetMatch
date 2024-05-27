import React from "react";
import styles from "./FilterSection.module.css";

const FilterSection = ({ title, name, options }) => {
  return (
    <div className={styles.filterContainer}>
      <p>{title}:</p>
      <div>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              className={styles.hiddenRadio}
              defaultChecked={option.defaultChecked}
            />
            <div className={styles.customRadio}></div>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
