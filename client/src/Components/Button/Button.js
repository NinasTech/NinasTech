import React from "react";
import "./Button.css";

const Button = ({ className = "", text, onClick }) => (
  <button className={`mainButton ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
