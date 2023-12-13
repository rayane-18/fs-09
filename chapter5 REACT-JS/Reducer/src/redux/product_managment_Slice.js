import { createSlice } from "@reduxjs/toolkit";

const product_managment = createSlice({
  name: "Product_mang",
  initialState: {
    ProductOBG: [],
  },

  reducers: {
    addproduct: (state, action) => {
      state.ProductOBG = [...state.ProductOBG, action.payload];
    },
  },
});

export const { addproduct } = product_managment.actions;
export default product_managment.reducer;
