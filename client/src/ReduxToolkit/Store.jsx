import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "../ReduxToolkit/Reducers/User/AppStateSlice";
import AdminGlobalStateSlice from "../ReduxToolkit/Reducers/Admin/AdminGlobalStateSlice";

const Store = configureStore({
  reducer: {
    appState: AppStateSlice,
    adminGlobalState: AdminGlobalStateSlice,
  },
});

export default Store;
