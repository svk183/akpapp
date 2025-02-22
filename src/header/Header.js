import React from "react";
import "./styles.css";
import logo from "../assets/logo.jpg";

export const Header = () => {
  return (
    <div>
      <header className="Anakapalli-Collectorate">
        <h1 className="AnakapalliCollectorate">Anakapalli Collectorate</h1>
        <img src={logo} height={70} width={80} className="logo" />
      </header>
    </div>
  );
};

export default Header;
