import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from '../ReduxToolkit/Reducers/AppStateSlice'


const Store = configureStore({
  reducer: {
    appState: AppStateSlice
  },
});

export default Store;


