import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="errorContainer">
      <h1 className="errorTitle bold">404</h1>
      <p className="errorContent thin">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="errorLink thin">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
}
