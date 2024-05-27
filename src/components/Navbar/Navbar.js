import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../Assets/Images/logo.png";
import arrowDown from "../../Assets/Icons/arrowDown.png";
import menu from "../../Assets/Icons/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <img src={menu} alt="Menu" />
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li>
            <NavLink to="/busca-pet">
              <p>
                Adotar <img src={arrowDown} alt="Arrow down" />
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/anuncie">
              <p>
                Anunciar <img src={arrowDown} alt="Arrow down" />
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre">
              <p>
                Sobre <img src={arrowDown} alt="Arrow down" />
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/FAQ">
              <p>
                Ajuda <img src={arrowDown} alt="Arrow down" />
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <p>Blog</p>
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
