import { ProductStructure } from "../models/product";
import {
  loadCreator,
  loadProductCreator,
  deleteCreator,
  addCreator,
  updateCreator,
} from "./product.actions.creator";

import { productReducer } from "./product.reducer";

let productMock: ProductStructure[];
let state: ProductStructure[];

describe("Given the productReducer function", () => {
  beforeEach(() => {
    productMock = [
      { id: 2, product: "Aceitunas", price: "2.00€", category: "cat:III" },
      {
        id: 10,
        product: "Mix de aceitunas",
        price: "7.50€",
        category: "cat:III",
      },
    ];
    state = [productMock[1]];
  });
  describe("When the loadCreator is called", () => {
    test("Then it should return all the data", () => {
      const result = productReducer([], loadCreator(productMock));
      expect(result).toEqual(productMock);
    });
  });
  describe("When the loadProductCreator is called", () => {
    test("Then it should return one car", () => {
      const result = productReducer(state, loadProductCreator(productMock[1]));
      expect(result).toEqual(state);
    });
  });
  describe("When the deleteCreator is called", () => {
    test("Then it should delete one item", () => {
      const result = productReducer(state, deleteCreator(productMock[1]));
      expect(result).toEqual([]);
    });
  });
  describe("When the addCreator is called", () => {
    test("Then it should add a product", () => {
      const updatedState = [...state, productMock[0]];
      const result = productReducer(state, addCreator(productMock[0]));
      expect(result).toEqual(updatedState);
    });
  });
  describe("Given the updateCreator function", () => {
    test("Then it should modify the item", () => {
      const update = {
        id: 10,
        product: "Mix de aceitunas",
        price: "7.50€",
        category: "cat:III",
      };
      const result = productReducer(state, updateCreator(update));
      expect(result).toEqual([update]);
    });
    test("Then if not found returns the same item", () => {
      const result = productReducer(
        state,
        updateCreator({} as ProductStructure)
      );
      expect(result).toEqual(state);
    });
  });
});
