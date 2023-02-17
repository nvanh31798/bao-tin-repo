import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchFormFace,
  fetchGenders,
} from "../../../api/productFilterApi/productFilterApi";
import { FormFaceModal } from "../../../models/formface";
import { GendersModal } from "../../../models/genders";
import { ProductFilterModel } from "../../../models/productFilter";
import { RootState, AppThunk } from "../../store";

export interface ProductFilterState {
  genders: GendersModal[];
  formface: FormFaceModal[];
  status: "idle" | "loading" | "failed";
  selectedFilter: ProductFilterModel;
}

const initialState: ProductFilterState = {
  genders: [],
  formface: [],
  status: "idle",
  selectedFilter: {},
};

export const fetchGenderAsync = createAsyncThunk(
  "productsFilter/fetchGender",
  async () => {
    const response = await fetchGenders();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const fetchFormFaceAsync = createAsyncThunk(
  "productsFilter/fetchFormFace",
  async () => {
    const response = await fetchFormFace();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const productsFilterSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchGenderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.genders = action.payload;
      })
      .addCase(fetchGenderAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchFormFaceAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.formface = action.payload;
      });
  },
});

export const {} = productsFilterSlice.actions;

export default productsFilterSlice.reducer;
