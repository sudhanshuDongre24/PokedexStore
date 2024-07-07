import React, { useEffect, useState } from "react";
import { Container, Loading, InfiniteScrollComponent } from "../components";
import { addPokemonData } from "../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import supabaseService from "../supabase/supabaseClient";
import axios from "axios";
import { changeTheme } from "../store/themeSlice";

const fetchPokemonData = async (dispatch, setLoader) => {
  try {
    // const response = await axios.get("/pokemon.json");
    // dispatch(addPokemonData(response.data));
    const { data } = await supabaseService.getPokemonData();
    // console.log(data);
    dispatch(addPokemonData(data[0].data));
    setLoader(true);
  } catch (error) {
    console.log("Home Component :: fetchPokemonData :: error ", error);
  }
};

function Home() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPokemonData(dispatch, setLoader);
  }, []);
  const pokemon = useSelector((state) => state.pokemonData.data);

  return (
    <div className="my-10 text-white bg-inherit z-10">
      <Container>
        {loader ? <InfiniteScrollComponent pokemon={pokemon} /> : <Loading />}
        {loader && <h1 className=" text-center mt-[200px]">World ends</h1>}
      </Container>
    </div>
  );
}

export default Home;
