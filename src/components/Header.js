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

export default function Header() {
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
