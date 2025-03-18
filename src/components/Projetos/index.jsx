import React from 'react';

import './Projetos.css'
import PROJETO1 from '../../assets/projetos/img-1.svg';
import PROJETO2 from '../../assets/projetos/img-2.svg';
import PROJETO3 from '../../assets/projetos/img-3.svg';
import PROJETO4 from '../../assets/projetos/img-4.svg';

const Projetos = () => {
  return (
    <section className="projetos">
      <h2>Projetos</h2>
      <div className="projeto">
        <img src={PROJETO1} alt="Projeto 1" />
        <div className="descricao">
          <h3>OneHealth</h3>
          <p>Uma API que permite um agendamento rápido...</p>
        </div>
      </div>
      <div className="projeto">
        <img src={PROJETO2} alt="Projeto 2" />
        <div className="descricao">
          <h3>Outfit Commerce</h3>
          <p>Uma API de E-Commerce desenvolvida em Python...</p>
        </div>
      </div>
      <div className="projeto">
        <img src={PROJETO3} alt="Projeto 2" />
        <div className="descricao">
          <h3>Outfit Commerce</h3>
          <p>Uma API de E-Commerce desenvolvida em Python...</p>
        </div>
      </div>
      <div className="projeto">
        <img src={PROJETO4} alt="Projeto 2" />
        <div className="descricao">
          <h3>Outfit Commerce</h3>
          <p>Uma API de E-Commerce desenvolvida em Python...</p>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
