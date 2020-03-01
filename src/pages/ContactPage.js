import React from "react";
import styled from "@emotion/styled";
import { Form, Card, Button } from "react-bootstrap";

const StyledCard = styled(Card)`
  width: 90vw;
  margin: auto;
`;

export default function ContactPage() {
  return (
    <StyledCard border="dark">
      <Card.Header>Any questions? Contact us!</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Your email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select a topic</Form.Label>
            <Form.Control as="select">
              <option> --- </option>
              <option>Shipping & payment</option>
              <option>Refunds</option>
              <option>General feedback</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="success">Submit</Button>
        </Form>
      </Card.Body>
    </StyledCard>
  );
}
