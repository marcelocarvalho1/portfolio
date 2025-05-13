import React from "react";
import "./Projetos.css";
import PROJETO1 from "../../assets/projetos/image.png";
import PROJETO2 from "../../assets/projetos/coffee.png";
import PROJETO3 from "../../assets/projetos/node.js.png";
import PROJETO4 from "../../assets/projetos/sistema-de-gestao.png";

const projetos = [
  {
    imagem: PROJETO1,
    titulo: "Drip Store",
    descricao:
      "Drip Store é uma loja online especializada na venda de sapatos esportivos...",
    link: "https://digital-store-omega.vercel.app",
  },
  {
    imagem: PROJETO2,
    titulo: "Coffee",
    descricao: "Landing page projetada para uma cafeteria...",
    link: "https://marcelocarvalho1.github.io/page-coffee/",
  },
  {
    imagem: PROJETO3,
    titulo: "Backend Node.js com Prisma, Bcrypt, Express e JWT",
    descricao:
      "Backend desenvolvido em Node.js, focado em fornecer uma base sólida...",
    link: "https://github.com/marcelocarvalho1/API_NODE_JWT",
  },
  {
    imagem: PROJETO4,
    titulo: "Outfit Commerce",
    descricao: "Este projeto é um sistema simples para gerenciamento de vendas, estoque e clientes, desenvolvido com React (Vite) no frontend e Node.js (Express) no backend, utilizando SQLite como banco de dados....",
    link: "https://github.com/marcelocarvalho1/sistema-de-gestao",
  },
];

const Projetos = () => {
  return (
    <section className="projetos">
      <h2 className="section-title">Projetos</h2>
      {projetos.map((projeto, index) => (
        <div className="project-card" key={index}>
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="project-image"
          />
          <div className="project-description">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-more"
            >
              Ver mais
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projetos;
