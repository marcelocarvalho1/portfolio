import React from "react";
import Intro from "./components/Intro";
import Sobre from "./components/Sobre";
// import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="webview">
            <Header />
      <Intro />
      <Sobre />
      {/* <Habilidades /> */}
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
