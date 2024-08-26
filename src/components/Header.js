import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../img/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={LOGO} alt="Logo 'Kasa'" />
      </NavLink>
      <nav className="navbar">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/APropos">A Propos</NavLink>
      </nav>
    </header>
  );
}
