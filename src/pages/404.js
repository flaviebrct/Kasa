import React from "react";
import "../style/pages/404.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="errorContainer">
      <h1 className="errorTitle">404</h1>
      <p className="errorContent">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="errorLink">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
}
