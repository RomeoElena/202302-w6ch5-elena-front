import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {},
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
