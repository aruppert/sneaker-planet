import React from "react";
import styled from "@emotion/styled";
import ProductCard from "../components/ProductCard";

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
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ShopContainer>
  );
}
