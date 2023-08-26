import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useCart } from '../hooks/Context';
// import { Navbar, Container } from 'react-bootstrap/Navbar';


const Header = () => {
  const { count } = useCart();

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
          <span className="material-symbols-outlined cart-count count">
            <p>shopping_cart</p><p className='num'>{count > 0 ? count : ""}</p>
          </span>
        </div>

      </Navbar>
    </header >
  );
};

export default Header;