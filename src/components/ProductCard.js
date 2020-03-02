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
`;

const StyledCardImg = styled(Card.Img)`
  /* animation: ${zoomOutUpRight} 5s 1; */
  animation: ${props =>
    props.startAnimation
      ? css`
          ${zoomOutUpRight} 1s 1
        `
      : null};
`;

export default function ProductCard({
  id,
  name,
  forGender,
  description,
  price,
  src,
  onAddItem
}) {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [startAnimation, setStartAnimation] = React.useState(false);
  console.log(startAnimation);

  function verifyAndAddItem(item) {
    if (item.selectedSize === "") {
      alert("Please select shoe size before buying");
      return null;
    } else {
      setStartAnimation(!startAnimation);
      onAddItem(item);
    }
  }
  return (
    <FlippyStyled flipOnHover={true} flipDirection="horizontal">
      <FrontSideStyled>
        <CardContainer>
          <CardStyled>
            <StyledCardImg variant="top" src={src} alt={name} />
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
      <BackSideStyled>
        <CardContainer>
          <CardStyled>
            <StyledCardImg
              startAnimation={startAnimation}
              onAnimationEnd={() => {
                setStartAnimation(!startAnimation);
              }}
              variant="top"
              src={src}
              alt={name}
            />
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
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => {
                    verifyAndAddItem({ name, price, selectedSize });
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
