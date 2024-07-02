import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import {
  Button,
  Container,
  PriceBox,
  ProductPageTopHeader,
  Tooltip,
  RankingComponent,
  ProductDetails,
  CommentSection,
  ImageComponent,
} from "../components";
import { changeTheme } from "../store/themeSlice";
import useTheme from "../hooks/useTheme";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonData.data);
  const pokemon = pokemonData.find((user) => user.id == id);

  const { pathname } = useLocation();
  useEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [pathname]);

  const productpagebgcolor = useTheme(pokemon.type[0], "productpagebgcolor");
  const cartButtonColor = useTheme(pokemon.type[0], "cartbutton");

  return (
    <>
      <ProductPageTopHeader {...pokemon} />
      <div className={` text-inherit py-20 min-h-screen ${productpagebgcolor}`}>
        <Container>
          <div className="w-full border-2 border-solid border-black  rounded">
            {/* Image */}
            <div className="border-b-2 border-solid border-black bg-white ">
              <ImageComponent
                altText={`pokemon-name: ${pokemon.name},pokemon-id: ${pokemon.id}`}
                id={pokemon.id}
                className="w-full h-[670px] p-8  bg-cover"
                type={pokemon.type}
              />
            </div>
            {/* content */} {/* Left Side */}
            <div className="flex justify-between flex-col sm:flex-row   h-full">
              <section className="border-b-[1px] sm:border-r-[1px]  border-solid border-black flex-[2]">
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
                    <h1>{pokemon.type}</h1>
                  </div>
                </section>
                <ProductDetails />
              </section>

              {/* Right side */}
              <div className="flex-[1]">
                <div className="border-b-[1px] border-solid border-black p-6 ">
                  <Button className={`w-full ${cartButtonColor} `}>
                    Add to cart
                  </Button>
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

                <RankingComponent {...pokemon} />
                <CommentSection />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductPage;
