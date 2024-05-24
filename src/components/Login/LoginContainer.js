import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import styles from "./LoginContainer.module.css";
import { FaCheckSquare } from "react-icons/fa";
import GoogleIcon from "../../Assets/Icons/GoogleIcon.png";
const LoginContainer = () => {
  const { loading, error, handleLogin } = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleEyeClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.login}>
          <h1>Que bom te ver aqui!</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email:</p>
              <input
                className={styles.inputField}
                type="email"
                name="email"
                required
                placeholder={"Email do usuário"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label>
              <p>Senha:</p>
              <input
                className={styles.inputField}
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                required
                placeholder={"Insira sua senha"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <div className={styles.formAddInfo}>
              <div className={styles.nameAndIcon}>
                <FaCheckSquare />
                <p>Lembrar de mim</p>{" "}
              </div>
              <p>
                <u>Esqueceu a Senha?</u>
              </p>
            </div>
            {!loading && <button className={styles.loginButton}>Entrar</button>}
          </form>
          {loading && (
            <button className="btn" disabled>
              Carregando...
            </button>
          )}
          {error && <p className="error">{error}</p>}

          <button className={styles.googleButton}>
            <img src={GoogleIcon} alt="Icon Google" />
            <p>Entrar com Google</p>
          </button>

          <div>
            <p>
              Não tem uma conta? <a href="/register">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
