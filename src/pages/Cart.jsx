import React from "react";
import { Button, Container } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.pokemonData);
  const { cartItem, length } = useSelector((state) => state.pokemonCart);

  let list = Object.keys(cartItem);
  const cartList = [];

  list.forEach((index) => {
    const pokemon = data.find((data) => data.id == index);
    cartList.push(
      <li className="mt-2" key={pokemon.name}>
        {pokemon.name}
      </li>
    );
  });

  return (
    <section className="textColorLightGray">
      {length !== 0 && (
        <Container>
          <h2 className="text-center mt-5 text-4xl">PokeMon Cart</h2>

          <div className="flex item-center justify-center mt-10 gap-10 px-12 ">
            <div className="border-[1px] border-solid rounded p-4 flex-[2] shrink bg-black">
              <h3 className="text-center text-xl">Items in Cart</h3>

              <ul>{cartList}</ul>
            </div>
            <div className="flex-[1] border-[1px] border-solid rounded p-4 h-[100px] bg-black">
              <h3 className="text-center text-xl">Proceed to Buy</h3>
            </div>
          </div>
        </Container>
      )}
      {length === 0 && (
        <Container>
          <div className="flex flex-col items-center justify-center gap-10 mt-12">
            <h2 className="text-2xl mt-10 ">The Cart in empty</h2>
            <Button
              onClick={() => navigate("/")}
              className="whiteShadow shadowAnimate"
            >
              Back to Home ⬅
            </Button>
          </div>
        </Container>
      )}
    </section>
  );
}

export default Cart;
