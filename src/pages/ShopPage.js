import React from "react";
import styled from "@emotion/styled";
import ProductCard from "../components/ProductCard";
import shoes from "../misc/Shoes";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ShopContainer = styled.div`
  padding: 70px 0;
  margin: 15vh 0 0 0;
`;

const StyledCarousel = styled(Carousel)`
  position: absolute;
  top: 90px;
  height: 22vh;
  width: 100%;
`;

const ProductContainer = styled.div`
  position: absolute;
  top: 310px;
  padding: 0 0 80px 0;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`;

export default function ShopPage({
  onChangeCart,
  cartAnimation,
  onChangeCartAnimation
}) {
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

  function addItem(item) {
    onChangeCart(item);
  }

  return (
    <ShopContainer>
      <StyledCarousel
        slidesPerPage={4}
        slidesPerScroll={3}
        centered
        autoPlay={6000}
        stopAutoPlayOnHover
        animationSpeed={1500}
        infinite
        breakpoints={{
          490: { slidesPerPage: 1, slidesPerScroll: 1 },
          800: { slidesPerPage: 2, slidesPerScroll: 2 },
          1000: { slidesPerPage: 3, slidesPerScroll: 3 }
        }}
      >
        {shoes.map(shoe => (
          <img key={shoe.name} alt={shoe.name} src={shoe.img} />
        ))}
      </StyledCarousel>
      <ProductContainer>
        {filteredShoes.map(shoe => (
          <ProductCard
            key={shoe.id}
            name={shoe.name}
            forGender={shoe.for}
            description={shoe.description}
            price={shoe.price}
            src={shoe.img}
            onAddItem={item => addItem(item)}
            cartAnimation={cartAnimation}
            onChangeCartAnimation={onChangeCartAnimation}
          />
        ))}
      </ProductContainer>
    </ShopContainer>
  );
}
