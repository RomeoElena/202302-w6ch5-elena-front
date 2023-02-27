import { createReducer } from "@reduxjs/toolkit";
import { ProductStructure } from "../models/product";
import * as ac from "./product.actions.creator";

const initialState: ProductStructure[] = [];

export const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadProductCreator, (state, { payload }) => {
    state.find((item) => item.id === payload.id);
  });
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.id !== payload.id)
  );
  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) => {
    const updated = state.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
    return updated;
  });
  builder.addDefaultCase((state) => state);
});
