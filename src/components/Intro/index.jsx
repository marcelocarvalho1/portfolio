import React from "react";
import { motion } from "framer-motion";
import Img from "../../assets/imagens/undraw_programming_65t2.svg";
import "./intro.css";

import html5 from "../../assets/tech/html5.svg";
import CSS from "../../assets/tech/css.svg";
import JS from "../../assets/tech/javascript.svg";
import GIT from "../../assets/tech/git.svg";
import GITHUB from "../../assets/tech/github.svg";
import BOOTSTRAP from "../../assets/tech/bootstrap.svg";
import SASS from "../../assets/tech/sass.svg";
import REACT from "../../assets/tech/react.svg";

const habilidades = [html5, CSS, JS, GIT, GITHUB, BOOTSTRAP, SASS, REACT];

const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <img src={Img} alt="imagem" className="topo-image" />
        <h1>
          Olá, sou <span>Marcelo Carvalho</span>
        </h1>
        <p>Desenvolvedor</p>
        <div className="m-auto-btn">
          <a href="/curriculo.pdf" download>
            <button className="btn-portfolio btn btn-primary">
              Baixar Currículo
            </button>
          </a>
        </div>
      </div>
      <div className="habilidades-flutuantes">
        {habilidades.map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="icone-flutuante"
            animate={floatAnimation}
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Intro;
