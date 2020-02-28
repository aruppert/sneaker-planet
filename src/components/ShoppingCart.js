import React from "react";
import styled from "@emotion/styled";
import { Card, ListGroup, Button } from "react-bootstrap";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 70px 0;
  z-index: 100;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ShoppingCart({ contentCart }) {
  const totalAmount = contentCart.reduce((prev, next) => prev + next.price, 0);
  return (
    <Container className="cart">
      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Header>
          <b>Your cart</b>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {contentCart.map(shoe => (
              <ListGroup key={shoe.name} variant="flush">
                <ListGroup.Item>
                  {shoe.name} {shoe.price}€ Size:{shoe.selectedSize}
                </ListGroup.Item>
              </ListGroup>
            ))}
            {totalAmount === 0 ? (
              "You have no items in your cart..."
            ) : (
              <Total>
                {" "}
                Total amount: {totalAmount}€
                <Button variant="danger" size="sm">
                  Checkout
                </Button>
              </Total>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
