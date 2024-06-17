import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeTheme } from "../store/themeSlice";
import {
  Button,
  Container,
  PercentageBar,
  PriceBox,
  Tooltip,
} from "../components";

function ProductPage() {
  const { id } = useParams();
  const pokemonData = useSelector((state) => state.pokemonData.data);
  const pokemon = pokemonData.find((user) => user.id == id);

  return (
    <>
      <div className="sticky z-[29] top-[115px] h-full py-2 border-b-[1px] border-black bg-white">
        <Container className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-8">
            <PriceBox className="border-black border-[2px] py-[4px]">
              ${pokemon.speed}
            </PriceBox>

            <h1 className=" mb-1 font-semibold  text-2xl">{pokemon.name}</h1>
          </div>
          <div className="flex justify-between text-center items-center gap-2">
            <span>7 rating</span>
            <Button className="hover:shadow-red-500 bg-[#ff90e8] border-black font-medium">
              Add to cart
            </Button>
          </div>
        </Container>
      </div>

      <div className="bg-white text-black py-20 min-h-screen">
        <Container>
          <div className="w-full border-2 border-solid border-black  rounded">
            {/* Image */}
            <div className="border-b-2 border-solid border-black bg-white">
              <img
                src="/public/pngegg.png"
                alt=""
                className="w-full h-[650px] bg-cover bg-white"
              />
            </div>
            {/* content */}
            <div className="flex justify-between  h-full">
              <div className="border-r-2 border-solid border-black flex-[2]">
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
                <h1>{pokemon.name}</h1>
              </div>

              <div className="flex-[1]">
                <div className="border-b-[1px] border-solid border-black p-6 ">
                  <Button className="bg-[#ff90e8] w-full ">Add to cart</Button>
                  <div className="flex items-center justify-between mt-6 gap-3  ">
                    <Button className="border-black border-solid border-2 flex justify-between items-center flex-[6] w-full ">
                      <span>Add to wish list</span>
                      <span>{`>`}</span>
                    </Button>
                    <Tooltip text="share">
                      <Button className="border-black border-solid border-2 flex-[1]">
                        ✔
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <div className="border-b-[1px] border-solid border-black p-6">
                  <div className="text-center mb-4">
                    <h1 className="font-semibold">Ranking</h1>
                  </div>

                  <div className="flex justify-between items-center flex-col gap-3">
                    <PercentageBar hp={pokemon.hp} />
                    <PercentageBar attack={pokemon.attack} />
                    <PercentageBar defense={pokemon.defense} />
                    <PercentageBar special_attack={pokemon.special_attack} />
                    <PercentageBar special_defense={pokemon.special_defense} />
                    <PercentageBar speed={pokemon.speed} />
                    <PercentageBar
                      total={
                        pokemon.hp +
                        pokemon.attack +
                        pokemon.defense +
                        pokemon.special_attack +
                        pokemon.special_defense +
                        pokemon.speed
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductPage;
