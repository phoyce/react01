import s from "./App.module.css";
import ping from "/minioins.webp";
import { useState } from "react";

function App() {
  const [qualAparece, setQualAparece] = useState("");

  return (
    <>
      {qualAparece === 'texto' && <h1 className={s.titulo}>Teste</h1>}
      {qualAparece === 'imagem' && <img src={ping} alt="Foto de pinguins" />}
      {qualAparece === 'outro' && <p>outro</p>}
      {/* {qualAparece === "texto" ? <h1 className={s.titulo}>Teste</h1> : qualAparece === "outro" ? <p>outro</p> : qualAparece === "imagem" ? <img src={ping} alt="Foto de pinguins"/> : ""} */}
      <br />
      <button onClick={() => setQualAparece("texto")}>texto</button>
      <br />
      <button onClick={() => setQualAparece("imagem")}>imagem</button>
      <br />
      <button onClick={() => setQualAparece("outro")}>Outro Texto</button>
    </>
  );
}

export default App;