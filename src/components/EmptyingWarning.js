import React from "react";
import styled from "@emotion/styled";
import { Alert, Button } from "react-bootstrap";

const AlertContainer = styled.div`
  z-index: 100;
  position: relative;
  top: 50vh;
  left: 15vw;
  width: 70vw;
`;
const MarginedButtons = styled(Button)`
  margin: auto;
`;

export default function EmptyingWarning({
  onChangeEmptyingWarning,
  onChangeCart,
  toggleCart
}) {
  return (
    <AlertContainer>
      <Alert variant="danger">
        <Alert.Heading>
          Are you sure you want to delete all items from your shopping cart?
        </Alert.Heading>
        <p>
          Now that you have put so much effort in selecting the right shoes for
          you... Really?
        </p>
        <hr />
        <div className="d-flex">
          <MarginedButtons
            onClick={() => onChangeEmptyingWarning(false)}
            variant="outline-success"
          >
            No, keep them - I changed my mind.
          </MarginedButtons>
          <MarginedButtons
            onClick={() => {
              onChangeEmptyingWarning();
              onChangeCart([]);
              setTimeout(() => toggleCart(), 700);
            }}
            variant="outline-danger"
          >
            Yes, I want to start over!
          </MarginedButtons>
        </div>
      </Alert>
    </AlertContainer>
  );
}
