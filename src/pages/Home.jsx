import React, { Suspense, useEffect, useState } from "react";
import { Container, Loading, InfiniteScrollComponent } from "../components";

import { addPokemonData } from "../store/pokemonSlice";
import { changeTheme } from "../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      await axios
        .get("/pokemon.json")
        .then((res) => res.data)
        .then((data) => {
          dispatch(addPokemonData(data));
          setLoader(true);
        });
    })();
  }, []);

  const pokemon = useSelector((state) => state.pokemonData.data);

  return (
    <div className="my-10 text-white bg-inherit z-10">
      <Container>
        {loader ? <InfiniteScrollComponent pokemon={pokemon} /> : <Loading />}
        <div>
          {loader && <h1 className=" text-center mt-[200px]">World ends</h1>}
        </div>
      </Container>
    </div>
  );
}

export default Home;
