import React from "react";

import "./Sobre.css";

const Sobre = () => {
  return (
    <section className="container-sobre">
      <h2 className="titulo-sobre">Sobre</h2>
      <div className="sobre-row">
        <div className="sobre-foto">
          <img src="/src/assets/profile/marcelo.jpeg" alt="Foto de perfil" />
        </div>
        <div className="sobre-descricao">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            nesciunt ducimus perspiciatis culpa soluta quas, repellendus rerum
            quibusdam veniam aliquam deserunt, error ex voluptas accusamus ea in
            atque at iure Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nihil quibusdam eaque nostrum id aperiam earum explicabo
            consectetur perspiciatis exercitationem, perferendis inventore
            molestiae dolor libero. Cumque distinctio ab assumenda odio
            provident? Neque debitis id accusamus ullam nobis officia aliquid,
            ipsam, tempora sapiente minus corrupti alias, laborum veritatis
            numquam! Reiciendis ullam quo corporis quos eaque quae
            exercitationem sint cumque iure. Perspiciatis, alias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
 