import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

const AppStateSlice = createSlice({
  name: "AppStateSlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { setCategory } = AppStateSlice.actions;

export default AppStateSlice.reducer;
