import React from "react";
import "./Button.css";

const Button = ({ className = '', text, onClick }) => {
  return (
    <button className={`mainButton ${className}`} onClick={onClick}>{text}</button>
  )
}

const SecondButton = () => {
  return 
}



export default Button;
