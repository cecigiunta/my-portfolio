import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Header() {
return (
  <div className="d-flex flex-column bg-black w-25 gap-5">
    <div className="d-flex flex-column text-white my-4">
      <h5>Cecilia Giunta</h5>
      <h6>Portfolio</h6>
    </div>
    <div className="d-flex flex-column align-items-left gap-5">
    <span>
      <Link to="/" className="navbar-link text-light lead fs-3">
      <i class="bi bi-house-door me-2"></i>
       Inicio
      </Link>
    </span>

    <span>
      <Link to="/sobre-mi" className="navbar-link text-white lead fs-3">
        <i class="bi bi-person-workspace text-white me-2"></i>
        Sobre mí
      </Link>
    </span>

    <span><Link to="/proyectos" className="navbar-link text-white lead fs-3">
    <i class="bi bi-folder2-open text-white me-2"></i>
      Proyectos
    
    </Link></span>
    <span><Link to="/contacto" className="navbar-link text-white lead fs-3">
    <i class="bi bi-chat-left-text text-white me-2"></i>
      Contacto
    </Link></span>
    </div>
  </div>
    );
}
export default Header;