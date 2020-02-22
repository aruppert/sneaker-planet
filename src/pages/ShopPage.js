import React from "react";
import styled from "@emotion/styled";
import ProductCard from "../components/ProductCard";
import shoes from "../misc/Shoes";

const ShopContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  padding: 70px 0;
  overflow: scroll;
  margin: auto;
`;

export default function ShopPage() {
  return (
    <ShopContainer>
      {shoes.map(shoe => (
        <ProductCard
          key={shoe.id}
          name={shoe.name}
          forGender={shoe.for}
          description={shoe.description}
          price={shoe.price}
          src={shoe.img}
        />
      ))}
    </ShopContainer>
  );
}
