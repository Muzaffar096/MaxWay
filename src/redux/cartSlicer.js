"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },

    deleteItemInCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (menu) => menu.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemInCart } = cartSlicer.actions;
export default cartSlicer.reducer;
