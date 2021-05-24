import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="pills" expand="sm">
      <Navbar.Brand as={Link} to="/">
        BlueBox Drive
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link as={Link} to="/user">
            Profile
            <hr />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
