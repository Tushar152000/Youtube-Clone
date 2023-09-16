import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
const store=configureStore({
    reducer:{
      app:appslice,
      search:SearchSlice,
      Chat:ChatSlice
    },
});

export default store;
