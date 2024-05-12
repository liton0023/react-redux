import { Store, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CartReducer from "./feather/cart/CartSlice";
import productReducer from "./feather/products/productSlice";
const store: Store = configureStore({
  reducer: {
    cartSlice: CartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
