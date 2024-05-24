import React, { useState } from "react";
import styles from "./DonationForm.module.css";
import {
  FaCreditCard,
  FaPaypal,
  FaLandmark,
  FaHandHoldingDollar,
} from "react-icons/fa6";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [selectedOng, setSelectedOng] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleOngChange = (e) => {
    setSelectedOng(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de submissão aqui
    console.log(`Doação de R$${amount} para ${selectedOng}`);
  };

  const ongs = [
    "Distribuir entre as ONGs",
    "ONG Pet Vila",
    "ONG Amigos da Onça",
    "ONG Vet a Pet",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.donationForm}>
        <h1>Faça uma Doação</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="amount">Valor da Doação:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="R$"
            className={styles.input}
            min="1"
            required
          />

          <label htmlFor="ong">Selecione uma ONG:</label>
          <select
            id="ong"
            value={selectedOng}
            onChange={handleOngChange}
            className={styles.select}
            required
          >
            <option value="" disabled>
              Selecione uma ONG
            </option>
            {ongs.map((ong, index) => (
              <option key={index} value={ong}>
                {ong}
              </option>
            ))}
          </select>

          <div className={styles.paymentMethodsContainer}>
            <p className={styles.paymentMethodsTitle}>Aceitamos:</p>
            <div className={styles.paymentMethodsOptions}>
              <p>
                <FaPaypal /> PayPal
              </p>
              <p>
                <FaCreditCard /> Cartão de Crédito
              </p>
              <p>
                <FaLandmark /> Transferência Bancária
              </p>
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            <p>
              Doar <FaHandHoldingDollar />
            </p>
          </button>
        </form>
      </div>{" "}
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
};

export default DonationForm;
