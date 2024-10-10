import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: false,
  width: "260x",
};

const AdminGlobalStateSlice = createSlice({
  name: "AdminGlobalStateSlice",
  initialState,
  reducers: {
    setIsCollapsed: (state, action) => {
      state.isCollapsed = action.payload;
    },
    setWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});
export const { setIsCollapsed, setWidth } = AdminGlobalStateSlice.actions;

export default AdminGlobalStateSlice.reducer;
