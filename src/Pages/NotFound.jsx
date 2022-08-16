import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="main-height d-flex flex-column">
      <span className="text-white py-5 lead fs-1">Ups! Parece que la página no existe :c</span>
        <Button variant="outline-light" className="btn-lg my-4 mx-auto w-25">
        <Link className="navbar-link text-white" to="/">
          Volver a Inicio
        </Link>
        </Button>
    </div>
  );
}
export default NotFound;