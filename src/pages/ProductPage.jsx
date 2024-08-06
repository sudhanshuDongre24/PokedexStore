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
  Loading,
} from "../components";
import { changeTheme } from "../store/themeSlice";
import useTheme from "../hooks/useTheme";
import { addCartData } from "../store/cartSlice";

function ProductPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const pokemonData = useSelector((state) => state.pokemonData.data);
  const loadingStatus = useSelector((state) => state.pokemonData.status);
  const dispatch = useDispatch();
  useEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [pathname]);

  const cartItem = useSelector((state) => state.pokemonCart.cartItem);

  let newCart = {};

  function addToPokemonCart(id, name, newCart) {
    newCart[id] = name;
    dispatch(addCartData({ ...newCart, ...cartItem }));
  }

  if (loadingStatus) {
    const pokemon = pokemonData?.find((user) => user.id == id);
    const productpagebgcolor = useTheme(pokemon.type[0], "productpagebgcolor");
    const cartButtonColor = useTheme(pokemon.type[0], "cartbutton");
    const shareButtonColor = useTheme(pokemon.type[0], "sharebutton");
    const borderColor = useTheme(pokemon.type[0], "bordercolor");
    const priceBoxColor = useTheme(pokemon.type[0], "priceboxcolor");

    return (
      <>
        <ProductPageTopHeader {...pokemon} func={addToPokemonCart} />
        <div
          className={` text-inherit py-20 min-h-screen ${productpagebgcolor}`}
        >
          <Container>
            <div
              className={`w-full border-2 border-solid   rounded ${borderColor}`}
            >
              {/* Image */}
              <div className={`border-b-2 border-solid ${borderColor}`}>
                <ImageComponent
                  altText={`pokemon-name: ${pokemon.name},pokemon-id: ${pokemon.id}`}
                  id={pokemon.id}
                  className="w-full h-[670px] p-8 bg-cover"
                  type={pokemon.type}
                />
              </div>
              {/* content */} {/* Left Side */}
              <div className="flex justify-between flex-col sm:flex-row  h-full">
                <section
                  className={`border-b-[1px] sm:border-r-[1px]  border-solid  flex-[2] ${borderColor}`}
                >
                  <div
                    className={`border-b-[1px] border-solid  py-2 ${borderColor}`}
                  >
                    <h1 className="text-3xl ml-4 my-4 font-headingMedium italic font-medium">
                      {pokemon.name}
                    </h1>
                  </div>
                  <section
                    className={`px-6  flex justify-between items-center border-b-[1px] border-solid ${borderColor}`}
                  >
                    <div
                      className={`flex-1 border-r-[1px] border-solid ${borderColor} `}
                    >
                      <Tooltip position="right" text={`$${pokemon.speed}`}>
                        <PriceBox className={`border-black ${priceBoxColor}`}>
                          ${pokemon.speed}
                        </PriceBox>
                      </Tooltip>
                    </div>
                    <div
                      className={`flex-[1] flex py-4 px-8  border-r-[1px] border-solid items-center gap-2 ${borderColor}`}
                    >
                      <img
                        className=" h-5 w-[6]  border-solid border-[2px] rounded-full"
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
                  <div
                    className={`border-b-[1px] border-solid  p-6 ${borderColor}`}
                  >
                    <Button
                      onClick={() =>
                        addToPokemonCart(pokemon.id, pokemon.name, newCart)
                      }
                      className={`w-full ${cartButtonColor} `}
                    >
                      Add to cart
                    </Button>
                    <div className="flex items-center justify-between mt-6 gap-3  ">
                      <Button
                        className={`border-solid border-2 flex justify-between items-center flex-[6] w-full ${borderColor} `}
                      >
                        <span>Add to wish list</span>
                        <span className="textColorDarkGray font-extralight">
                          &#x0056;
                        </span>
                      </Button>
                      <Tooltip text="share" className="bg-black text-white">
                        <Button
                          className={`border-solid border-2 flex-[1] ${shareButtonColor}`}
                        >
                          ✔
                        </Button>
                      </Tooltip>
                    </div>
                  </div>

                  <RankingComponent {...pokemon} />
                  <CommentSection {...pokemon} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default ProductPage;
