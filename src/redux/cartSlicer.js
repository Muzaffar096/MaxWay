"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemsInCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.itemsInCart.push({ ...newItem, count: 1 });
      }
    },
    decrementItemInCart: (state, action) => {
      const itemToDecrement = action.payload;
      const existingItem = state.itemsInCart.find((menu) => menu.id === itemToDecrement.id);
      if (existingItem.count > 1) {
        existingItem.count--;
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.itemsInCart = state.itemsInCart.filter((menu) => menu.id !== itemToRemove.id);
    },
    
  },
});

export const { setItemInCart, decrementItemInCart,removeItem } = cartSlicer.actions;
export default cartSlicer.reducer;
