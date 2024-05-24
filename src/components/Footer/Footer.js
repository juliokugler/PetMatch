import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import logo from "../../Assets/Images/logo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.newsletterRow}>
          <div className={styles.newsletterText}>
            <h2>Receba nossas novidades!</h2>
            <p>
              Seja o primeiro a receber novidades sobre animais em nosso site.
            </p>
          </div>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Insira seu email"
              className={styles.input}
            />
            <button className={styles.button}>Inscreva-se</button>
          </div>
        </div>

        <div className={styles.infoRow}>
          <div className={styles.logoSection}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <p>
              Em parceria com ONGs e voluntários, somos capazes de mudar o
              destino de milhares de animais pelo Brasil.
            </p>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linksGroup}>
              <h3>Ajude Animais</h3>
              <a href="busca-pet">Adote</a>
              <a href="anuncie">Anuncie</a>
              <a href="contribuir">Contribua</a>
            </div>
            <div className={styles.linksGroup}>
              <h3>PETMACH</h3>
              <a href="sobre">Sobre nós</a>
              <a href="#contato">Contato</a>
            </div>
            <div className={styles.linksGroup}>
              <h3>Recursos</h3>
              <a href="blog">Blog</a>
              <a href="#newsletter">Newsletter</a>
            </div>
            <div className={styles.linksGroup}>
              <h3>Ajuda</h3>
              <a href="FAQ">FAQ</a>
              <a href="#guia-de-adocao">Guia de Adoção</a>
            </div>
            <div className={styles.linksGroup}>
              <h3>Legal</h3>
              <a href="#termos-de-uso">Termos de Uso</a>
              <a href="#politica-de-privacidade">Política de privacidade</a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomRow}>
          <div className={styles.trademark}>
            © 2024 Petmach. Todos Direitos Reservados
          </div>
          <div className={styles.socialIcons}>
            <FaTwitter className={styles.icon} />
            <FaLinkedin className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
