// SandwichSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { sandwichinfo } from "../../Constraints/Index";

const initialState = {
  cart1: [],
};

export const SandwichSlice = createSlice({
  name: "sandwich",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart1.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const sandwichItem = sandwichinfo.find((item) => item.id === id);
        if (sandwichItem) {
          state.cart1 = [...state.cart1, { ...sandwichItem, quantity }];
        }
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.cart1.findIndex((item) => item.id === id);

      if (index !== -1) {
        if (state.cart1[index].quantity > 1) {
          state.cart1 = state.cart1.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          state.cart1 = state.cart1.filter((item, i) => i !== index);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = SandwichSlice.actions;

export default SandwichSlice.reducer;
