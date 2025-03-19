import React from "react";

import "./Contato.css";

const Contato = () => {
  return (
    <section className="contato">
      <div className="container">
        <div className="title">
          <h2>Contato</h2>
        </div>
        <div className="formulario">
          <form
            id="my-form"
            action="https://formspree.io/f/xkggawwy"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input
                type="text"
                name="sobrenome"
                id="sobrenome"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="whatsapp">Contato:</label>
              <input
                type="text"
                name="contato"
                id="contato"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                name="mensagem"
                id="mensagem"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button id="my-form-button" className="btn btn-success">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
