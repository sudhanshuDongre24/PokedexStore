import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: {},
  length: 0,
};

const cartSlice = createSlice({
  name: "pokemonCart",
  initialState,
  reducers: {
    addCartData: (state, action) => {
      state.cartItem = action.payload;
      state.length = Object.keys(state.cartItem).length;
    },
  },
});

export const { addCartData } = cartSlice.actions;

export default cartSlice.reducer;
