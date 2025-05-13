import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css"; // Importando o CSS

const Header = () => {
  return (
    <header className="header">
      <div className="social-icons">
        <a
          href="https://wa.me/5588981934886"
          target="_blank"
          className="icon whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/a-marcelo-carvalho/"
          target="_blank"
          className="icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/marcelocarvalho1"
          target="_blank"
          className="icon github"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
