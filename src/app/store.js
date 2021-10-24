import { configureStore } from "@reduxjs/toolkit";
import cartReduer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReduer,
  },
});
