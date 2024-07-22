import React from "react";
import { Container, Button, Tooltip, PriceBox } from "../";
import useTheme from "../../hooks/useTheme";
import addToCart from "../../hooks/AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../../store/cartSlice";

function ProductPageTopHeader({ name, speed, type, id }) {
  const dispatch = useDispatch();
  const cartButtonColor = useTheme(type[0], "cartbutton");
  const productHeaderBgColor = useTheme(type[0], "productpagebgcolor");
  const headerBorderColor = useTheme(type[0], "headerbordercolor");
  const priceBoxColor = useTheme(type[0], "priceboxcolor");

  const cartItem = useSelector((state) => state.pokemonCart.cartItem);

  let newCart = {};

  function addToPokemonCart(id, name, newCart) {
    newCart[id] = name;
    dispatch(addCartData({ ...newCart, ...cartItem }));
  }

  return (
    <header
      className={`sticky z-[29] top-[115px] h-full pt-3 pb-2 border-b-[1px] border-t-[1px] ${productHeaderBgColor} ${headerBorderColor}`}
    >
      <Container className="flex items-center justify-between ">
        <div className="flex items-center justify-between gap-8">
          <Tooltip position="right" text={`$ ${speed}`}>
            <PriceBox className={`border-black py-[4px] ${priceBoxColor}`}>
              $ {speed}
            </PriceBox>
          </Tooltip>

          <h1 className="mb-1 font-headingMedium italic font-medium text-3xl">
            {name}
          </h1>
        </div>
        <div className="flex justify-between text-center items-center gap-2">
          <span>⭐⭐⭐⭐⭐ 7 rating</span>
          <Button
            className={`font-medium ${cartButtonColor}`}
            onClick={() => addToPokemonCart(id, name, newCart)}
          >
            Add to cart
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default ProductPageTopHeader;
