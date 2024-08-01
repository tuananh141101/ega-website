import { configureStore } from "@reduxjs/toolkit";
import categories from "./slice/categories";
import product from "./slice/product";

export const store = configureStore({
  reducer: {
    shop: categories,
    product: product,
  },
});
