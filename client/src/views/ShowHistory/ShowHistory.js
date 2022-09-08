import React, { useState } from "react";
import "./ShowHistory.css";
import { useNavigate, useParams } from "react-router-dom";
import ThirdButton from "../../Components/Button";

const ninastechLogo = require("../../assets/realNinaLogo.png");
const outra = require("../../assets/outra.jpeg");

const ShowHistory = () => {
  const [nina, setNina] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    fetch(`/ninas/${params.id}`)
      .then((res) => res.json())
      .then((data) => setNina(data));
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="display-flex">
      <div className="flex1">
        <div className="display-flex-direction"></div>
        <img className="ninastechLogo" src={ninastechLogo} />
        <img className="outra" src={outra} />
        <ThirdButton
          text="Voltar para a página!"
          className="voltar"
          onClick={handleClick}
        />
      </div>
      <div className="flex1">
        {nina ? (
          <div>
            <div className="display-flex-direction"></div>
            <img className="usuarios" src={nina.image_url} />
            <div className="nome-profissao">{nina.name}-{nina.profession}</div>
            <div className="box-text">{nina.story}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShowHistory;
