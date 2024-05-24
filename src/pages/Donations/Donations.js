import React, { useEffect } from "react";
import styles from "./Donations.module.css";
import DonationForm from "../../components/Donations/DonationForm/DonationForm";
import pawsright from "../../Assets/Images/pawsRight.png";
import pawsleft from "../../Assets/Images/pawsLeft.png";
const Donations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <DonationForm />
      </div>
      <img className={styles.pawsRightImage} src={pawsright}></img>
      <img className={styles.pawsLeftImage} src={pawsleft}></img>
    </div>
  );
};

export default Donations;
