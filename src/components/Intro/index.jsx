import React from 'react';
import Img from '../../assets/imagens/undraw_programming_65t2.svg'
import './intro.css'

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <img src={Img} alt="imagem" className="topo-image" />
        <h1>Olá, eu sou o <span>Marcelo</span></h1>
        <p>Desenvolvedor Web</p>
        <div className="m-auto-btn">
          <button className="btn-portfolio btn btn-primary">Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
