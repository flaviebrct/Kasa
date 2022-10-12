import React from "react";
import "../style/components/Header.css";
import { Link } from "react-router-dom";
import LOGO from "../img/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={LOGO} alt="Logo 'Kasa'" />
      <nav className="navbar">
        <ul className="nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
