import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";
import themeSlice from "./themeSlice";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    pokemonData: pokemonSlice,
    pokemonTheme: themeSlice,
    pokemonSearch: searchSlice,
    pokemonCart: cartSlice,
  },
});

export default store;
