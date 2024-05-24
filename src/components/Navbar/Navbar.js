import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import arrowDown from "../../Assets/Icons/arrowDown.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/">
          <img src={logo} alt="Logo"></img>
        </NavLink>

        <ul>
          <li>
            <NavLink to="/busca-pet">
              <p>
                Adotar <img src={arrowDown}></img>
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/anuncie">
              <p>
                Anunciar <img src={arrowDown}></img>
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre">
              <p>
                Sobre <img src={arrowDown}></img>
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/FAQ">
              <p>
                Ajuda <img src={arrowDown}></img>
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <p>Blog </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contribuir">
              <p className={styles.cta}>Contribuir</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <p className={styles.cta2}>Entrar</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
