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
      <div className="sticky z-[29] top-[114px] h-full py-2 border-b-[1px] border-black bg-white">
        <Container className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-8">
            <Tooltip position="right" text={`$${pokemon.speed}`}>
              <PriceBox className="border-black border-[2px] py-[4px]">
                ${pokemon.speed}
              </PriceBox>
            </Tooltip>

            <h1 className=" mb-1 font-semibold  text-2xl">{pokemon.name}</h1>
          </div>
          <div className="flex justify-between text-center items-center gap-2">
            <span>⭐⭐⭐⭐⭐ 7 rating</span>
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
            {/* content */} {/* Left Side */}
            <div className="flex justify-between  h-full">
              <section className="border-r-2 border-solid border-black flex-[2]">
                <div className="border-b-[1px] solid border-black py-2">
                  <h1 className="text-3xl ml-4 my-4">{pokemon.name}</h1>
                </div>

                <section className="px-6  flex justify-between items-center border-b-[1px] border-solid border-black ">
                  <div className="flex-1 border-r-[1px] border-solid border-black">
                    <Tooltip position="right" text={`$${pokemon.speed}`}>
                      <PriceBox className="border-black border-2 border-solid">
                        ${pokemon.speed}
                      </PriceBox>
                    </Tooltip>
                  </div>
                  <div className="flex-[1] flex py-4 px-8 border-black border-r-[1px] border-solid items-center gap-2">
                    <img
                      className=" h-5 w-[6] border-black border-solid border-[2px] rounded-full"
                      src="/pngegg.png"
                      alt=""
                    />
                    <p className="underline">Pokemon</p>
                  </div>

                  <div className="pl-4 flex-[3]">
                    <span className="">⭐⭐⭐⭐⭐ 7 rating</span>
                  </div>
                </section>

                <section className="p-4 text-wrap mt-5">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus modi laudantium maiores blanditiis? Sapiente
                    praesentium eius, incidunt possimus iure aspernatur,
                    doloribus error ab fuga, sed soluta atque. Repellat id unde
                    laboriosam exercitationem assumenda possimus et nostrum
                    aliquid maxime harum non blanditiis, veniam praesentium,
                    modi ab ducimus quaerat soluta! Laborum nostrum facilis
                    voluptas, tempora, sed ducimus molestias minus eum
                    necessitatibus ad id temporibus a explicabo vel nobis
                    distinctio, praesentium enim. Et non voluptatibus deserunt
                    esse blanditiis repellat officia neque consequatur quibusdam
                    exercitationem iste veritatis, ullam quasi ipsum? Quibusdam
                    deleniti, architecto esse consectetur et dolor molestias
                    quae quidem ea veniam laudantium quasi.
                  </p>
                </section>
              </section>

              {/* Right side */}
              <div className="flex-[1]">
                <div className="border-b-[1px] border-solid border-black p-6 ">
                  <Button className="bg-[#ff90e8] w-full ">Add to cart</Button>
                  <div className="flex items-center justify-between mt-6 gap-3  ">
                    <Button className="border-black border-solid border-2 flex justify-between items-center flex-[6] w-full ">
                      <span>Add to wish list</span>
                      <span>{`>`}</span>
                    </Button>
                    <Tooltip text="share" className="bg-black text-white">
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

                  <div className="flex flex-col gap-6">
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

                <div className="px-4 pt-4 pb-8">
                  <h2 className="text-center py-4 font-semibold text-[16px]">
                    Comment
                  </h2>

                  <div className="flex flex-col gap-2 mb-6">
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

                    <div>
                      <img
                        src="/pngegg.png"
                        alt=""
                        className="w-5 h-5 inline"
                      />
                      <span className="underline pl-4">Anonymous</span>
                      <span className="text-slate-600 italic no-underline ">
                        {" "}
                        about 3 hour ago
                      </span>
                    </div>
                  </div>
                  <hr className="border-black" />

                  <div className="flex flex-col gap-2 mb-6 mt-6">
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

                    <div>
                      <img
                        src="/pngegg.png"
                        alt=""
                        className="w-5 h-5 inline"
                      />
                      <span className="underline pl-4">Anonymous</span>
                      <span className="text-slate-600 italic no-underline ">
                        {" "}
                        about 3 hour ago
                      </span>
                    </div>
                  </div>
                  <hr className="border-black" />

                  <div className="flex flex-col gap-2 mb-6 mt-6">
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

                    <div>
                      <img
                        src="/pngegg.png"
                        alt=""
                        className="w-5 h-5 inline"
                      />
                      <span className="underline pl-4">Anonymous</span>
                      <span className="text-slate-600 italic no-underline ">
                        {" "}
                        about 3 hour ago
                      </span>
                    </div>
                  </div>
                  <hr className="border-black" />
                  <div className="flex flex-col gap-2 mb-6 mt-6">
                    <span>⭐⭐⭐⭐⭐</span>
                    <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

                    <div>
                      <img
                        src="/pngegg.png"
                        alt=""
                        className="w-5 h-5 inline"
                      />
                      <span className="underline pl-4">Anonymous</span>
                      <span className="text-slate-600 italic no-underline ">
                        {" "}
                        about 3 hour ago
                      </span>
                    </div>
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
