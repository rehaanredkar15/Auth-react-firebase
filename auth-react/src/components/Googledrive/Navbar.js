import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sn">
      <Navbar.Brand as={Link} to="/">
        Rehaan's Personal Drive
      </Navbar.Brand>

      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
