import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

const store = configureStore({
  reducer: {
    pokemonData: pokemonSlice,
  },
});

export default store;
