import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,

  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
