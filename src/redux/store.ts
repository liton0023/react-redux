import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CounterSlice from "../feather/counter/CounterSlice";
const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
