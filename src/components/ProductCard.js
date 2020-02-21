import React from "react";
import styled from "@emotion/styled";
import { Card, Button } from "react-bootstrap";

const CardContainer = styled.div`
  margin: 10px;
  min-height: 382px;
`;

const CardStyled = styled(Card)`
  min-height: 382px;
  width: 12rem;
  display: flex;
`;
const CardBody = styled(Card.Body)`
  display: flex;
  flex-flow: column wrap;
`;
const CardNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const CardTitle = styled(Card.Title)`
  font-size: 1rem;
`;

export default function ProductCard({
  id,
  name,
  forGender,
  description,
  price,
  src
}) {
  return (
    <CardContainer>
      <CardStyled>
        <Card.Img variant="top" src={src} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <Card.Text style={{ flexGrow: 1 }}>{description}</Card.Text>
          <CardNav>
            <Button variant="outline-dark" size="sm">
              Details
            </Button>
            <Button variant="success" size="sm">
              Buy
            </Button>
          </CardNav>
        </CardBody>
      </CardStyled>
    </CardContainer>
  );
}
