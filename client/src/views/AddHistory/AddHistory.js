import "./AddHistory.css";
import { useNavigate } from "react-router-dom";
import SecondButton from "../../Components/Button";
import React from "react"

const ninastechLogo = require("../../assets/realNinaLogo.png");
const desenho2 = require("../../assets/desenho2.png");

const AddHistory = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/show");
  };
  return (
    <div className="body addH">
      <form>
        <div className="displayFlex">
          <div className="flex1">
            <div className="textTop">Conte sobre a sua historia !</div>
            <div className="contain">
              <div className="align">
                <div>
                  <label htmlFor="name">Nome: </label>
                  <input className="pinkBox" name="name" />
                </div>
                <div>
                  <label htmlFor="email">Mande o seu email: </label>
                  <input className="pinkBox" name="email" />
                </div>
                <div>
                  <label htmlFor="current-profession">Profissao atual: </label>
                  <input className="pinkBox" name="current-profession" />
                </div>
                <div>
                  <label htmlFor="location">Localizacao onde mora: </label>
                  <input className="pinkBox" name="location" />
                </div>
                <div>
                  <label htmlFor="urlImage">Mande a sua foto em url: </label>
                  <input className="pinkBox" name="url" />
                </div>
                <div>
                  <textarea placeholder="Escreva a sua historia:"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex1">
            <div>
              <img className="ninastechLogo" src={ninastechLogo} />
            </div>
            <div>
              <img className="desenho2" src={desenho2} />
            </div>
          </div>
        </div>
        <SecondButton
          text="Adicionar!"
          className="adicionar"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};
export default AddHistory;
