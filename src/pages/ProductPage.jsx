import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import {
  Button,
  Container,
  PercentageBar,
  PriceBox,
  ProductPageTopHeader,
  Tooltip,
  RankingComponent,
  ProductDetails,
  CommentSection,
} from "../components";

function ProductPage() {
  const { id } = useParams();
  const pokemonData = useSelector((state) => state.pokemonData.data);
  const pokemon = pokemonData.find((user) => user.id == id);

  const { pathname } = useLocation();
  useEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ProductPageTopHeader {...pokemon} />
      <div className="bg-white text-black py-20 min-h-screen">
        <Container>
          <div className="w-full border-2 border-solid border-black  rounded">
            {/* Image */}
            <div className="border-b-2 border-solid border-black bg-white">
              <img
                src="/pngegg.png"
                alt=""
                className="w-full h-[650px] bg-cover bg-white"
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
                  </div>
                </section>
                <ProductDetails />
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
