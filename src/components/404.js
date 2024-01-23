import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/404.css";

function Error404() {
  return (
    <div className="error">
      <h1>404</h1>
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error_link">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
}

export default Error404