import React from "react";
import "../style/components/Header.css";
import { NavLink } from "react-router-dom";
import LOGO from "../img/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={LOGO} alt="Logo 'Kasa'" />
      <nav className="navbar">
        <ul className="nav">
          <li>
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/APropos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
