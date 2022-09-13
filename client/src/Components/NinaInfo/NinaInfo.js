import React from "react";
import "./NinaInfo.css";

const NinaInfo = ({ nina }) => (
  <div className="nome-profissao">
    <div className="nome">{nina.name}</div>
    <div className="profissao">{nina.profession}</div>
    <div className="cidade">{nina.city}</div>
  </div>
);

export default NinaInfo;
