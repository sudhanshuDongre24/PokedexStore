import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  data: [],
};

const pokemonSlice = createSlice({
  name: "pokemonData",
  initialState,
  reducers: {
    addPokemonData: (state, action) => {
      state.status = true;
      state.data = action.payload;
    },
  },
});

export const { addPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
