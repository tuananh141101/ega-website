import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalQuantity: 0,
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartList.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
