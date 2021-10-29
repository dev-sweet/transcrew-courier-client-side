import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
  return (
    <div className="mb-5 pb-5">
      <Navbar className="nav-bar" collapseOnSelect fixed="top" expand="lg">
        <Container className="py-3">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar-link" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/booking">
                Booking
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/">
                My Orders
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/">
                Manage Orders
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/booking">
                Add a New Service
              </Nav.Link>
              <Nav.Link className="login-btn" as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
