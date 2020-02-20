import React from "react";
import styled from "@emotion/styled";
import { Card, Button } from "react-bootstrap";
import sneaker1 from "../assets/sneaker1.png";

const CardContainer = styled.div`
  margin: 10px;
`;

const CardNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default function ProductCard() {
  return (
    <CardContainer>
      <Card style={{ width: "10rem" }}>
        <Card.Img variant="top" src={sneaker1} />
        <Card.Body>
          <Card.Title>asics Gel 5.0</Card.Title>
          <Card.Text>Women's Running Shoes</Card.Text>
          <CardNav>
            <Button variant="outline-dark" size="sm">
              Details
            </Button>
            <Button variant="success" size="sm">
              Buy
            </Button>
          </CardNav>
        </Card.Body>
      </Card>
    </CardContainer>
  );
}
