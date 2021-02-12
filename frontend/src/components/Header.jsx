import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">
          <span className="ml-2">Projeto teste</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              className={`${ props.location.pathname === "/" ? "active" : "" }`}
            >
              Homepage
            </Nav.Link>

            <Nav.Link
              href="/pagina"
              className={`${ props.location.pathname === "/pagina" ? "active" : "" }`}
            >
              Página teste
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default withRouter(Header);