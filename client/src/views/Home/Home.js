import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import NinaInfo from "../../Components/NinaInfo";

const ninastechLogo = require("../../assets/realNinaLogo.png");
const desenho1 = require("../../assets/desenho1.jpeg");
const mac = require("../../assets/mac.jpeg");

function Home() {
  const [ninas, setNinas] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("/ninas")
      .then((res) => res.json())
      .then((data) => setNinas(data));
  }, []);

  const handleButtonClick = () => {
    navigate("/add");
  };

  const handleNinaClick = (id) => {
    navigate(`/show/${id}`);
  };

  return (
    <div className="App homePage">
      <div className="header">
        <img className="desenho1" src={desenho1} />
        <div className="textAndImage">
          <h2>
            Ninastech, é uma comunidade que visa trazer informações e
            conhecimento para meninas brasileiras que desejam trabalhar em com
            tecnologia.
          </h2>
          <img className="ninastechLogo" src={ninastechLogo} />
        </div>
      </div>
      <div>
        <div className="textMac">
          <h2>
            Aqui você pode compartilhar suas experiências trabalhando com
            tecnologia e influenciar outras pessoas a também quererem trabalhar
            com programação. 
          </h2>
        </div>
        <div className="buttonAndImg">
          <Button
            text="Adicionar a minha historia !!"
            className="addHistoryButton"
            onClick={handleButtonClick}
          />
          <img className="mac" src={mac} />
        </div>
        <div className="cliqueAqui">
          <h1>Clique em uma das historias para ler e se inspirar!</h1>
        </div>
        <div className="blocks-pictures">
          {ninas.map((nina) => (
            <div
              key={nina.girl_id}
              className="history-girl"
              onClick={() => handleNinaClick(nina.girl_id)}
            >
              <img className="nina-picture" src={nina.image_url} />
              <NinaInfo nina={nina} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
