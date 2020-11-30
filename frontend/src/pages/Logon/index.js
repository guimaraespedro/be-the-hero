import React from "react";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import {Link} from "react-router-dom";


const Logon = () => {
  const changeTheme = () => {
    const applyedColor = document.documentElement.style.getPropertyValue(
      "--background-color"
    );
    const themeColor = applyedColor === "black" ? "#f0f0f5" : "black";
    document.documentElement.style.setProperty(
      "--background-color",
      themeColor
    );
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
