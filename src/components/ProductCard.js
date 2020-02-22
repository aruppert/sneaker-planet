import React from "react";
import styled from "@emotion/styled";
import { Card, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";


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
    <Flippy flipOnHover={true} flipDirection="horizontal">
      <FrontSide>
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
      </FrontSide>
      <BackSide>
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
                      <Dropdown.Item eventKey="34">34</Dropdown.Item>
                      <Dropdown.Item eventKey="36">36</Dropdown.Item>
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
                  <Dropdown.Item eventKey="38">38</Dropdown.Item>
                  <Dropdown.Item eventKey="40">40</Dropdown.Item>
                  {forGender === "male" || forGender === "unisex" ? (
                    <>
                      {" "}
                      <Dropdown.Item eventKey="42">42</Dropdown.Item>
                      <Dropdown.Item eventKey="44">44</Dropdown.Item>
                      <Dropdown.Item eventKey="46">46</Dropdown.Item>
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
                <Button variant="success" size="sm">
                  Buy
                </Button>
              </CardNav>
            </CardBody>
          </CardStyled>
        </CardContainer>
      </BackSide>
    </Flippy>
  );
}
