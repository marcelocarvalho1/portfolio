import React from "react";

import "./Projetos.css";
import PROJETO1 from "../../assets/projetos/image.png";
import PROJETO2 from "../../assets/projetos/coffee.png";
import PROJETO3 from "../../assets/projetos/node.js.png";
import PROJETO4 from "../../assets/projetos/img-4.svg";

const projetos = [
  {
    imagem: PROJETO1,
    titulo: "Drip Store",
    descricao: "Drip Store é uma loja online especializada na venda de sapatos esportivos, oferecendo uma seleção variada de modelos para diferentes estilos e necessidades. Nosso catálogo inclui tênis para corrida, academia, casual, streetwear e performance, com opções das melhores marcas e tecnologias do mercado.",
    link: "https://digital-store-omega.vercel.app",
  },
  {
    imagem: PROJETO2,
    titulo: "Coffee",
    descricao: "Landing page projetada para uma cafeteria, oferecendo uma interface simples e atraente para os usuários. Os visitantes podem encontrar informações sobre os serviços oferecidos, a história da cafeteria e uma seção de contato para perguntas e feedback.",
    link: "https://marcelocarvalho1.github.io/page-coffee/",
  },
  {
    imagem: PROJETO3,
    titulo: "Backend Node.js com Prisma, Bcrypt, Express e JWT",
    descricao: "Backend desenvolvido em Node.js, focado em fornecer uma base sólida para aplicações web que necessitam de autenticação segura e gerenciamento de usuários. Utilizando tecnologias modernas como Prisma para interação com o banco de dados, Bcrypt para hash de senhas, Express para criação de APIs e Jsonwebtoken para autenticação via JWT, este projeto é ideal para quem busca uma solução robusta e escalável. Este projeto é um backend desenvolvido em Node.js com as seguintes tecnologias.",
    link: "https://github.com/marcelocarvalho1/API_NODE_JWT",
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
