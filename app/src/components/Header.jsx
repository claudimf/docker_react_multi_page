import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { IconBox } from '@tabler/icons';

function Header(props) {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">
          <IconBox/>
          <span className="ml-2">PROJECT STARTER</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              className={`${ props.location.pathname === "/" ? "active" : "" }`}
            >
              HOME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default withRouter(Header);