import React from "react";

import "./Projetos.css";
import PROJETO1 from "../../assets/projetos/image.png";
import PROJETO2 from "../../assets/projetos/img-2.svg";
import PROJETO3 from "../../assets/projetos/img-3.svg";
import PROJETO4 from "../../assets/projetos/img-4.svg";

const projetos = [
  {
    imagem: PROJETO1,
    titulo: "OneHealth",
    descricao: "Uma API que permite um agendamento rápido...",
    link: "#",
  },
  {
    imagem: PROJETO2,
    titulo: "Outfit Commerce",
    descricao: "Uma API de E-Commerce desenvolvida em Python...",
    link: "#",
  },
  {
    imagem: PROJETO3,
    titulo: "Outfit Commerce",
    descricao: "Uma API de E-Commerce desenvolvida em Python...",
    link: "#",
  },
  {
    imagem: PROJETO4,
    titulo: "Outfit Commerce",
    descricao: "Uma API de E-Commerce desenvolvida em Python...",
    link: "#",
  },
];

const Projetos = () => {
  return (
    <section className="projetos">
      <h2>Projetos</h2>
      {projetos.map((projeto, index) => (
        <div className="projeto" key={index}>
          <img src={projeto.imagem} alt={projeto.titulo} />
          <div className="descricao">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="ver-mais">
              Ver mais
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projetos;
