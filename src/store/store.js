import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    pokemonData: pokemonSlice,
    pokemonTheme: themeSlice,
  },
});

export default store;
