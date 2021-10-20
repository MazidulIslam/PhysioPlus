import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Header = () => {
  const history = useHistory();
  const handleAppointMentButton = () => {
    history.push("/appointment");
  };
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            PHYSIO PLUS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/therapists">
              Therapists
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          {user?.uid ? (
            <Button onClick={handleAppointMentButton} variant="primary">
              Make Appointment
            </Button>
          ) : (
            ""
          )}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="pe-3">
              {user?.displayName || user.email}
            </Navbar.Text>
          </Navbar.Collapse>

          {user?.uid ? (
            <Button onClick={logOut} variant="outline-danger">
              Logout
            </Button>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
