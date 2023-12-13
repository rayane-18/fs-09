import { configureStore } from "@reduxjs/toolkit";
import product_managment_Slice from "./product_managment_Slice";

export const store = configureStore({
  reducer: {
    product_managment: product_managment_Slice,
  },
});
