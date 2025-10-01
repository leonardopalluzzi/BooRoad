import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Oops! La pagina che stai cercando non esiste.</p>
      <Link to="/" className="btn ">
        Torna alla Home
      </Link>
    </div>
  );
}
