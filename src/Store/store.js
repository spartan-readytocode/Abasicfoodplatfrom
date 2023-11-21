// store.js
import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./Features/PizzaSlice";
import SandwichReducer from "./Features/SandwichSlice";

export const store = configureStore({
  reducer: {
    pizza: PizzaReducer,
    sandwich: SandwichReducer,
  },
});

export default store;
