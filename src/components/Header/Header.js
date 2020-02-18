import React from "react";
import Twitterlogo from "../../assets/img/twitter-logo.png";

import "./Header.scss";

//Componete encabezado de la aplicación
const Header = () => {
  return (
    <div className="header">
      <img src={Twitterlogo} alt="Tweets simulator" />
      <h1>Tweets Simulator</h1>
    </div>
  );
};

export default Header;
