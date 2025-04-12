import { TCategories } from "@/types/categoriesType";
import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
export const getCategoriesThunk = createAsyncThunk(
  "categories/getCategoriesThunk",
  async (_, thunkApi) => {
    const { rejectWithValue,signal } = thunkApi;

    try {
      const response = await axios.get<TCategories[]>("/categories",{signal});
      return response.data;
    } catch (error) {
      return rejectWithValue(isAxiosErrorHandler(error))
    }
  }
);
