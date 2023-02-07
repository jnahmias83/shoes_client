import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    productsSlice: productsReducer,
    cartSlice: cartReducer
  },
});

export default store;
