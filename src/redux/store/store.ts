import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contacts from "../slices/contacts";

const reducer = combineReducers({
  contacts,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
