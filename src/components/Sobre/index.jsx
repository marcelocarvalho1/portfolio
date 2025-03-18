import React from 'react';

import './Sobre.css';
import FOTO from '../../assets/profile/marcelo.jpeg';

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="container">
        <div className="title">
          <h2>Sobre mim</h2>
        </div>
        <div className="row">
          <div className="c-photo">
            <img src={FOTO} alt="Imagem de perfil" />
          </div>
          <div className="c-descricao">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quaerat aspernatur maxime sed accusantium recusandae modi, nihil
              necessitatibus dignissimos esse vitae placeat reprehenderit
              blanditiis atque facere autem maiores unde quasi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quaerat aspernatur maxime sed accusantium recusandae modi, nihil
              necessitatibus dignissimos esse vitae placeat reprehenderit
              blanditiis atque facere autem maiores unde quasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
