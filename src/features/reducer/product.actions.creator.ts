import { createAction } from "@reduxjs/toolkit";
import { ProductStructure } from "../models/product";
import { productActions } from "./product.actions.types";

export const loadCreator = createAction<ProductStructure[]>(
  productActions.loadProducts
);

export const loadProductCreator = createAction<ProductStructure>(
  productActions.loadProduct
);

export const addCreator = createAction<ProductStructure>(
  productActions.addProduct
);

export const deleteCreator = createAction<ProductStructure>(
  productActions.deleteProduct
);

export const updateCreator = createAction<ProductStructure>(
  productActions.updateProduct
);
