import { pizzainfo } from "../importer";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const PizzaSlice = createSlice({
  name: "pizza cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const pizzaItem = pizzainfo.find((item) => item.id === id);
        if (pizzaItem) {
          state.cart.push({ ...pizzaItem, quantity });
        }
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = PizzaSlice.actions;

export default PizzaSlice.reducer;
