import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../../models/product";
import { getProductById } from "../../../api/productApi/productsApi";
import axios from "axios";
import { RootState } from "../../store";

export interface ShoppingCartState {
  productsOrdered?: Array<ProductModel>;
  status: "idle" | "loading" | "failed" | "fullfilled";
}

const initialState: ShoppingCartState = {
  productsOrdered: [],
  status: "idle",
};

export const shoppingCartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getShoppingCart(state, action) {
      if (!action.payload) {
        state.status = "loading";
      }
      state.productsOrdered = action.payload;
      state.status = "fullfilled";
    },
    addMoreProduct(state, action) {
      if (!action.payload) {
        return;
      }
      state.productsOrdered?.push(action.payload);
    },
  },
});

export const loadingState = (state: RootState) => state.product.status;

export const { getShoppingCart, addMoreProduct} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
