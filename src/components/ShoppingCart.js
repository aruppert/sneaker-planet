import React from "react";
import styled from "@emotion/styled";
import { Card, ListGroup, Button } from "react-bootstrap";

const Container = styled.div`
  position: sticky;
  display: flex;
  top: 65px;
  justify-content: flex-end;
  left: 0px;
  /* margin: 70px 0; */
  z-index: 100;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardHeader = styled(Card.Header)`
  font-size: 1.3rem;
  background: #343a40;
  color: white;
`;

const ListGroupItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

export default function ShoppingCart({ contentCart, onCartChange }) {
  const totalAmount = contentCart.reduce((prev, next) => prev + next.price, 0);

  const deleteItem = index => {
    const newContentCart = contentCart.filter(
      (item, itemIndex) => index !== itemIndex
    );
    return onCartChange([...newContentCart]);
  };

  return (
    <Container className="cart">
      <Card bg="light" style={{ width: "18rem" }}>
        <CardHeader>Your shopping cart</CardHeader>
        <Card.Body>
          <Card.Text>
            {contentCart.map((shoe, index) => (
              <ListGroup key={index} variant="flush">
                <ListGroupItem>
                  {shoe.name} Size: {shoe.selectedSize} Price: {shoe.price}€
                  <Button
                    onClick={e => deleteItem(index)}
                    variant="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </ListGroupItem>
              </ListGroup>
            ))}
            {totalAmount === 0 ? (
              "You have no items in your cart..."
            ) : (
              <Total>
                {" "}
                Total: {totalAmount}€
                <Button
                  variant="success"
                  size="sm"
                  onClick={() =>
                    alert(
                      `Thank you for your purchase of ${
                        contentCart.length === 1
                          ? "1 pair"
                          : `${contentCart.length} pairs`
                      } of shoes for a total of ${totalAmount}€! Our advanced tracking system already has got all your details, will deduct the amount from your bank and send the items to you right away. Have a great day! Your snooper shop :)`
                    )
                  }
                >
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
