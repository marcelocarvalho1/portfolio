import React from 'react';
import './Habilidades.css'
import html5 from '../../assets/tech/html5.svg'
import CSS from '../../assets/tech/css.svg'
import JS from '../../assets/tech/javascript.svg'
import GIT from '../../assets/tech/git.svg'
import GITHUB from '../../assets/tech/github.svg'
import BOOTSTRAP from '../../assets/tech/bootstrap.svg'
import SASS from '../../assets/tech/sass.svg'
import REACT from '../../assets/tech/react.svg'


const Habilidades = () => {
  return (
    <section className="habilidades">
      <h3>Ferramentas e Tecnologias</h3>
      <div className="tech-grid">
        <div className="tech-item">
          <img src={html5} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="tech-item">
          <img src={CSS}alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="tech-item">
          <img src={JS} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="tech-item">
          <img src={GIT} alt="Git" />
          <p>Git</p>
        </div>
        <div className="tech-item">
          <img src={GITHUB} alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="tech-item">
          <img src={BOOTSTRAP} alt="Bootstrap" />
          <p>BootStrap</p>
        </div>
        <div className="tech-item">
          <img src={SASS} alt="Sass" />
          <p>Sass</p>
        </div>
        <div className="tech-item">
          <img src={REACT} alt="React" />
          <p>React</p>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
