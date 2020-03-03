import React from "react";
import styled from "@emotion/styled";
import { Card, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { zoomOutUpRight } from "../Animations";
import { css } from "@emotion/core";

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

const FlippyStyled = styled(Flippy)`
  padding: 0;
`;

const FrontSideStyled = styled(FrontSide)`
  padding: 0;
  box-shadow: none;
`;
const BackSideStyled = styled(BackSide)`
  padding: 0;
  box-shadow: none;
  animation: ${props =>
    props.startAnimation
      ? css`
          ${zoomOutUpRight} 1s 1
        `
      : null};
`;

const QuantityInput = styled.input`
  width: 30px;
`;

export default function ProductCard({
  id,
  name,
  forGender,
  description,
  price,
  src,
  contentCart,
  onAddItem,
  cartAnimation,
  onChangeCartAnimation
}) {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [startAnimation, setStartAnimation] = React.useState(false);

  function verifyAndAddItem(item) {
    // if (item.selectedSize === "") {
    //   alert("Please select shoe size before buying");
    //   return null;
    // } else {
    onChangeCartAnimation(!cartAnimation);
    setStartAnimation(!startAnimation);
    console.log(contentCart);

    const checkForSameShoesInCart = contentCart.find(
      x => x.id === item.id && x.selectedSize === item.selectedSize
    );

    if (checkForSameShoesInCart) {
      const sameShoesIncreasedQuantity = {
        ...item,
        quantity: item.quantity + checkForSameShoesInCart.quantity
      };
      const newCart = contentCart;

      const index = newCart.indexOf(checkForSameShoesInCart);
      console.log(index);
      if (index !== -1) {
        newCart.splice(index, 1);
        onAddItem([...newCart]);
      }
      //   const updatedCart = contentCart.splice(
      //     index,
      //     1,
      //     sameShoesIncreasedQuantity
      //   );

      // console.log(sameShoesIncreasedQuantity);

      // onAddItem((contentCart[indexOldEntry] = sameShoesIncreasedQuantity));
    } else {
      console.log("Nope, it's new");
      onAddItem(item);
    }
  }

  return (
    <FlippyStyled flipOnHover={true} flipDirection="horizontal">
      <FrontSideStyled>
        <CardContainer>
          <CardStyled>
            <Card.Img variant="top" src={src} alt={name} />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <Card.Text style={{ flexGrow: 1 }}>{description}</Card.Text>
              <Button
                style={{ margin: "auto" }}
                variant="outline-dark"
                size="sm"
              >
                Hover for details
              </Button>
            </CardBody>
          </CardStyled>
        </CardContainer>
      </FrontSideStyled>
      <BackSideStyled
        startAnimation={startAnimation}
        onAnimationEnd={() => {
          setStartAnimation(!startAnimation);
          onChangeCartAnimation(!cartAnimation);
        }}
      >
        <CardContainer>
          <CardStyled>
            <Card.Img variant="top" src={src} alt={name} />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <Card.Text style={{ flexGrow: 1 }}>
                Gender - {forGender}
                <br />
                Price - {price}€
              </Card.Text>
              <CardNav>
                <DropdownButton
                  drop="up"
                  variant="secondary"
                  title="Size"
                  id="dropdown-size-id"
                  key="dropdown-size-key"
                >
                  {forGender === "female" || forGender === "unisex" ? (
                    <>
                      <Dropdown.Item
                        onSelect={eventKey => setSelectedSize(eventKey)}
                        eventKey="34"
                      >
                        34
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={eventKey => setSelectedSize(eventKey)}
                        eventKey="36"
                      >
                        36
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item eventKey="34" disabled>
                        34
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="36" disabled>
                        36
                      </Dropdown.Item>
                    </>
                  )}
                  <Dropdown.Item
                    onSelect={eventKey => setSelectedSize(eventKey)}
                    eventKey="38"
                  >
                    38
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={eventKey => setSelectedSize(eventKey)}
                    eventKey="40"
                  >
                    40
                  </Dropdown.Item>
                  {forGender === "male" || forGender === "unisex" ? (
                    <>
                      {" "}
                      <Dropdown.Item
                        onSelect={eventKey => setSelectedSize(eventKey)}
                        eventKey="42"
                      >
                        42
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={eventKey => setSelectedSize(eventKey)}
                        eventKey="44"
                      >
                        44
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={eventKey => setSelectedSize(eventKey)}
                        eventKey="46"
                      >
                        46
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Dropdown.Item eventKey="42" disabled>
                        42
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="44" disabled>
                        44
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="46" disabled>
                        46
                      </Dropdown.Item>
                    </>
                  )}
                </DropdownButton>
                <QuantityInput
                  name="quantity"
                  type="number"
                  min="1"
                  max="9"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                  required
                />
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => {
                    verifyAndAddItem({
                      id,
                      name,
                      price,
                      selectedSize,
                      quantity
                    });
                  }}
                >
                  Add
                </Button>
              </CardNav>
            </CardBody>
          </CardStyled>
        </CardContainer>
      </BackSideStyled>
    </FlippyStyled>
  );
}
