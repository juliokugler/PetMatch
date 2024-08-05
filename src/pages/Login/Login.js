import React from "react";
import bg from "../../Assets/Images/bg1.png";
//Styles
import styles from "./Login.module.css";

//Components
import LoginContainer from "../../components/Login/LoginContainer";

const Login = () => {
  return (
    <div className={styles.container}>  <div className={styles.imageContainer}>
        <img src={bg}></img>
      </div>
      <div className={styles.loginContainer}>
        <LoginContainer />
      </div>
    
    </div>
  );
};

export default Login;
