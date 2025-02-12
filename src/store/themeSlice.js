import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "pokemon",
};

const themeSlice = createSlice({
  name: "pokemonTheme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
