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
  const filteredShoes = shoes.filter(shoe => {
    if (sessionStorage.getItem("genderFilter") !== "") {
      return (
        shoe.for === sessionStorage.getItem("genderFilter") ||
        shoe.for === "unisex"
      );
    } else {
      return shoes;
    }
  });

  return (
    <ShopContainer>
      {filteredShoes.map(shoe => (
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
