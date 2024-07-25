import React from "react";
import { Button, CartCard, Container } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.pokemonData);
  const { cartItem, length } = useSelector((state) => state.pokemonCart);

  const newData = JSON.parse(JSON.stringify(data));
  const cartItemKey = Object.keys(cartItem);

  const cartItems = [];

  cartItemKey.forEach((key) => {
    const pokemonData = newData.find((pokemon) => pokemon.id == key);
    cartItems.push(pokemonData);
  });

  return (
    <div>
      <CartCard {...cartItems} />
    </div>
  );
}

export default Cart;
