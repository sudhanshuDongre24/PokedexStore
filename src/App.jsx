import { Header } from "./components";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPokemonData } from "./store/pokemonSlice";
import supabaseService from "./supabase/supabaseClient";

const fetchPokemonData = async (dispatch) => {
  try {
    // const response = await axios.get("/pokemon.json");
    // dispatch(addPokemonData(response.data));
    const { data } = await supabaseService.getPokemonData();
    // console.log(data);
    dispatch(addPokemonData(data[0].data));
  } catch (error) {
    console.log("Home Component :: fetchPokemonData :: error ", error);
  }
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPokemonData(dispatch);
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
