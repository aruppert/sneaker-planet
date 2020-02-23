import React from "react";
import styled from "@emotion/styled";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

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

export default function Header({ onFilterChange, onActivateFilter }) {
  function setFilter(gender) {
    onActivateFilter(true);
    onFilterChange(gender);
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
      <NavbarBrand href="/shop">
        <Logo src="../logo192.png" width="40" height="40" alt="shop-logo" />
        <H1>Sneaker Planet</H1>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/shop">Shop</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setFilter("female")}>
              Women
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setFilter("male")}>
              Men
            </NavDropdown.Item>
            <NavDropdown.Item href="/children">Children</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/customs">Customs</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/sale">SALE</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Find Sneaker"
            className="mr-sm-2"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
