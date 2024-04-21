import { configureStore } from "@reduxjs/toolkit";
import textClassSlice from "./index";

const store = configureStore({
  reducer: {
    textClass: textClassSlice,
  },
});

export default store;
