import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchCategory } from "../../../api/categoryApi/categoryApi";
import { CategoryModel } from "../../../models/category";
import axios from "axios";
export interface CategoryState {
  category?: Array<CategoryModel>;
  status: "idle" | "loading" | "failed" | "fullfilled";
}

const initialState: CategoryState = {
  category: [],
  status: "idle",
};

export const categoryFetchAsync = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    let categories: Array<CategoryModel> = [];
    await axios
      .get(`http://103.90.227.238/api/category/`)
      .then((res) => {
        categories = res.data;
        getCategory(categories);
      })
      .catch((error) => console.log(error));
    return categories;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory(state, action) {
      if (!action.payload) {
        state.status = "loading";
      }
      state.category = action.payload;
      state.status = "fullfilled";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryFetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(categoryFetchAsync.fulfilled, (state, action) => {
        state.category = action.payload;
        state.status = "fullfilled";
      })
      .addCase(categoryFetchAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectCategory = (state: RootState) => state.category.category;
export const isLoading = (state: RootState) => state.category.status;

export const { getCategory } = categorySlice.actions;

export default categorySlice.reducer;
