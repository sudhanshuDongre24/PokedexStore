import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    pokemonData: pokemonSlice,
    pokemonTheme: themeSlice,
    pokemonSearch: searchSlice,
  },
});

export default store;
