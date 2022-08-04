import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Header() {
return (
  <Navbar collapseOnSelect expand="lg" className="navbarStyle py-3 justify-content-end">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex justify-content-between gap-5">
          <Nav.Link className="text-white text-decoration-none"><Link to="/" className="navbar-link text-white lead fs-3">Inicio</Link></Nav.Link>
          <Nav.Link className="text-white"><Link to="/sobre-mi" className="navbar-link text-white lead fs-3">Sobre mí</Link></Nav.Link>
          <Nav.Link className="text-white"><Link to="/proyectos" className="navbar-link text-white lead fs-3">Proyectos</Link></Nav.Link>
          <Nav.Link className="text-white"><Link to="/contacto" className="navbar-link text-white lead fs-3">Contacto</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;