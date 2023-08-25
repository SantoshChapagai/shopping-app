import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import { Navbar, Container } from 'react-bootstrap/Navbar';


const Header = (props) => {

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">B4Y</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
        </Container>
        <div className="cart">
          <span className="material-symbols-outlined cart-count">
            shopping_cart{props.count}
          </span>
        </div>

      </Navbar>
    </header >
  );
};

export default Header;