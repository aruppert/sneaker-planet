import React from "react";
import styled from "@emotion/styled";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Cart from "../icons/Cart";
import { latePulse } from "../Animations";
import { css } from "@emotion/core";

const H1 = styled.h1`
  font-size: 1.3rem;
  color: white;
  margin: 0 0 0 10px;
  align-self: center;
`;
const NavbarBrand = styled(Navbar.Brand)`
  display: flex;
`;
const Logo = styled.img`
  border-radius: 50%;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
`;

const CartWrapper = styled.div`
  animation: ${({ cartAnimation }) =>
    cartAnimation
      ? css`
          ${latePulse} 1s 1
        `
      : null};
`;

export default function Header({ toggleCart, cartAnimation }) {
  function setFilter(gender) {
    sessionStorage.setItem("genderFilter", gender);
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
      <NavbarBrand href="/home">
        <Logo src="../logo192.png" width="40" height="40" alt="shop-logo" />
        <H1>Sneaker Planet</H1>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/shop" onClick={() => setFilter("")}>
            Shop
          </Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                setFilter("female");
                window.location.reload();
              }}
            >
              Women
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                setFilter("male");
                window.location.reload();
              }}
            >
              Men
            </NavDropdown.Item>
            <NavDropdown.Item disabled href="/children">
              Children
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item disabled href="/customs">
              Customs
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link disabled href="/sale">
            SALE
          </Nav.Link>
          <Nav.Link disabled href="/about">
            About us
          </Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={() => toggleCart()}>
        <CartWrapper cartAnimation={cartAnimation}>
          <Cart />
        </CartWrapper>
      </Button>
    </Navbar>
  );
}
