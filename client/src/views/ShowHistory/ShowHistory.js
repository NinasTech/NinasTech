import React, { useState } from "react";
import "./ShowHistory.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import NinaInfo from "../../Components/NinaInfo";

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
        <Button
          text="Voltar para a página!"
          className="voltar"
          onClick={handleClick}
        />
      </div>
      <div className="flex1">
        {nina ? (
          <div className="center-story">
            <div className="display-flex-direction"></div>
            <img className="usuarios" src={nina.image_url} />
            <NinaInfo nina={nina} />
            <div className="box-text">{nina.story}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShowHistory;
