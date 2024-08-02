import React from "react";
import { Button, CartComponent, Container } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { cartItem, length } = useSelector((state) => state.pokemonCart);

  const { data } = useSelector((state) => state.pokemonData);
  const newData = JSON.parse(JSON.stringify(data));
  const cartItemKey = Object.keys(cartItem);

  const cartItems = [];

  cartItemKey.forEach((key) => {
    const pokemonData = newData.find((pokemon) => pokemon.id == key);
    cartItems.push(pokemonData);
  });

  if (length == 0) {
    return (
      <div className="mt-20 textColorLightGray  flex item-center flex-col gap-5 justify-center">
        <h2 className="text-center text-3xl">Cart Is Empty</h2>
        <Button onClick={() => navigate("/")} className="mx-auto">
          Back to Home Page
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <CartComponent {...cartItems} />
      </div>
    );
  }
}

export default Cart;
