import { configureStore } from "@reduxjs/toolkit";
import basketReduer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReduer,
  },
});
