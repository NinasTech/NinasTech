import "./AddHistory.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import React, { useState } from "react";

const ninastechLogo = require("../../assets/realNinaLogo.png");
const desenho2 = require("../../assets/desenho2.png");

const AddHistory = () => {
  const [ninaData, setNinaData] = useState({
    name: "",
    email: "",
    profession: "",
    city: "",
    image_url: "",
    story: "",
  });
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setNinaData((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };

  const handleEmailChange = (event) => {
    setNinaData((prev) => {
      return {
        ...prev,
        email: event.target.value,
      };
    });
  };

  const handleProfessionChange = (event) => {
    setNinaData((prev) => {
      return {
        ...prev,
        profession: event.target.value,
      };
    });
  };

  const handleCityChange = (event) => {
    setNinaData((prev) => {
      return {
        ...prev,
        city: event.target.value,
      };
    });
  };

  const handleImageUrlChange = (event) => {
    setNinaData((prev) => {
      return {
        ...prev,
        image_url: event.target.value,
      };
    });
  };

  const handleStoryChange = (event) => {
    setNinaData((prev) => {
      return {
        ...prev,
        story: event.target.value,
      };
    });
  };

  const sendNinaData = () => {
    fetch("/ninas", {
      method: "POST",
      headers: {
        Accept: "apolication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ninaData),
    })
      .then((res) => res.json())
      .then(({ girl_id }) => navigate(`/show/${girl_id}`));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ninaData.name === "") {
      alert("Você esqueceu de escrever o seu nome!");
      return;
    }
    if (ninaData.email === "") {
      alert("Você esqueceu de escrever o seu email!");
      return;
    }
    if (ninaData.profession === "") {
      alert("Você esqueceu de escrever a sua profissão!");
      return;
    }
    if (ninaData.city === "") {
      alert("Você esqueceu de escrever a sua localização!");
      return;
    }
    if (ninaData.image_url === "") {
      alert("Você esqueceu de enviar a sua imagem url!");
      return;
    }
    if (ninaData.story === "") {
      alert("Você esqueceu de escrever a sua historia!");
      return;
    }

    sendNinaData();
  };

  return (
    <div className="body addH">
      <form onSubmit={handleSubmit}>
        <div className="displayFlex">
          <div className="flex1">
            <div className="textTop">Conte sobre a sua historia !</div>
            <div className="contain">
              <div className="align">
                <div>
                  <label htmlFor="name">Nome: </label>
                  <input
                    className="pinkBox"
                    name="name"
                    value={ninaData.name}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Mande o seu email: </label>
                  <input
                    className="pinkBox"
                    name="email"
                    value={ninaData.email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <label htmlFor="current-profession">Profissao atual: </label>
                  <input
                    className="pinkBox"
                    name="current-profession"
                    value={ninaData.profession}
                    onChange={handleProfessionChange}
                  />
                </div>
                <div>
                  <label htmlFor="location">Localizacao onde mora: </label>
                  <input
                    className="pinkBox"
                    name="location"
                    value={ninaData.city}
                    onChange={handleCityChange}
                  />
                </div>
                <div>
                  <label htmlFor="urlImage">Mande a sua foto em url: </label>
                  <input
                    className="pinkBox"
                    name="url"
                    value={ninaData.image_url}
                    onChange={handleImageUrlChange}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Escreva a sua historia:"
                    value={ninaData.story}
                    onChange={handleStoryChange}
                  ></textarea>
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
        <Button text="Adicionar!" className="adicionar" />
      </form>
    </div>
  );
};
export default AddHistory;
