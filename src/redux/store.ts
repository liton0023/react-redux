import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CartReducer from "./feather/cart/CartSlice";
const store = configureStore({
  reducer: {
    cartSlice: CartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
