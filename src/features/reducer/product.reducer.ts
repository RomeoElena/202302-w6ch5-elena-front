import { createReducer } from "@reduxjs/toolkit";
import { ProductStructure } from "../models/product";
import * as ac from "./product.actions.creator";

const initialState: ProductStructure[] = [];

export const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.loadProductCreator, (state, { payload }) =>
    state.filter((item) => item.id === payload.id)
  );
  builder.addCase(ac.addCreator, (state, { payload }) => [...state, payload]);
  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item))
  );

  builder.addDefaultCase((state) => state);
});
