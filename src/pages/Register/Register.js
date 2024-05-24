import styles from "./Register.module.css";
import RegisterContainer from "../../components/Register/RegisterContainer";

const Register = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.background}>
        <div className={styles.innerContainer}>
          <RegisterContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
