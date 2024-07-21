import { Header } from "./components";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPokemonData } from "./store/pokemonSlice";
import supabaseService from "./supabase/supabaseClient";
import axios from "axios";

const fetchPokemonData = async (dispatch) => {
  try {
    const response = await axios.get("/pokemon.json");
    dispatch(addPokemonData(response.data));
    // const { data } = await supabaseService.getPokemonData();
    // // console.log(data);
    // dispatch(addPokemonData(data[0].data));
  } catch (error) {
    console.log("Home Component :: fetchPokemonData :: error ", error);
  }
};

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  let showHeader = true;
  const isSignupPage = location.pathname.includes("/signup");
  const isLoginPage = location.pathname.includes("/login");

  if (isSignupPage || isLoginPage) {
    showHeader = false;
  } else {
    showHeader = true;
  }

  useEffect(() => {
    fetchPokemonData(dispatch);
  }, [dispatch]);
  return (
    <>
      {showHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
