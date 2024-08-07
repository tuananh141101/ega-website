import { configureStore } from "@reduxjs/toolkit";
import categories from "./slice/categories";
import product from "./slice/product";
import cart from "./slice/cart";
import favourite from "./slice/favourite";

export const store = configureStore({
  reducer: {
    shop: categories,
    product: product,
    cart: cart,
    favourite: favourite,
  },
});
