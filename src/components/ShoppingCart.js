import React from "react";
import styled from "@emotion/styled";
import { Card, ListGroup } from "react-bootstrap";

const Container = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 100;
`;

export default function ShoppingCart({ contentCart }) {
  //   function totalOfCart(contentCart, prop) {
  //     if (contentCart === null) {
  //       return 0;
  //     }
  //     return contentCart.reduce(function(a, b) {
  //       return b[prop] == null ? a : a + b[prop];
  //     }, 0);
  //   }
  return (
    <Container>
      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Header>Your cart</Card.Header>
        <Card.Body>
          <Card.Title>Added items</Card.Title>
          <Card.Text>
            {contentCart.map(shoe => (
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {shoe.name} {shoe.price}€ Size:{shoe.selectedSize}
                </ListGroup.Item>
              </ListGroup>
            ))}
            {/* {totalOfCart(contentCart)} */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
