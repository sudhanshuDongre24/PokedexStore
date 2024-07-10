import React, { useEffect, useState } from "react";
import { Container, Loading, InfiniteScrollComponent } from "../components";
import { addPokemonData } from "../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import supabaseService from "../supabase/supabaseClient";
import axios from "axios";
import { changeTheme } from "../store/themeSlice";
import { useLocation } from "react-router-dom";

function Home() {
  const pokemon = useSelector((state) => state.pokemonData.data);
  const loader = useSelector((state) => state.pokemonData.status);
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
