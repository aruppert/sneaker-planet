import React from "react";
import styled from "@emotion/styled";
import { Form, Card, Button, Row, Col } from "react-bootstrap";

const StyledCard = styled(Card)`
  width: 90vw;
  margin: auto;
`;

const StyledRow = styled(Row)`
  margin: 8px 0 0;
`;

export default function OrderPage() {
  return (
    <StyledCard border="dark">
      <Card.Header>Please add your personal information</Card.Header>
      <Card.Body>
        <Form>
          <StyledRow>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Max" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Mustermann" />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col>
              <Form.Label>Street Name</Form.Label>
              <Form.Control type="text" placeholder="Baumstr." />
            </Col>
            <Col>
              <Form.Label>Street Number</Form.Label>
              <Form.Control type="number" placeholder="1" />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="50066" />
            </Col>
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Control type="number" placeholder="Musterheim" />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col>
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Deutschland" />
            </Col>
            <Col>
              <Form.Label>Your email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col>
              <Form.Label>Further information</Form.Label>
              <Form.Control as="textarea" StyledRows="2" />
            </Col>
            <Button variant="success">Submit</Button>
          </StyledRow>
        </Form>
      </Card.Body>
    </StyledCard>
  );
}
