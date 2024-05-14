import { Store, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import CartReducer from "./feather/cart/CartSlice";
import productReducer from "./feather/products/productSlice";
import userReducer from "./feather/user/userSlice";
const store: Store = configureStore({
  reducer: {
    cartSlice: CartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
