import { TCategories } from "@/types/categoriesType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
export const getCategoriesThunk = createAsyncThunk(
  "categories/getCategoriesThunk",
  async (_, thunkApi) => {
    const { rejectWithValue,signal } = thunkApi;

    try {
      const response = await axios.get<TCategories[]>("/categories",{signal});
      console.log(response.data)
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      } else {
        return rejectWithValue(("failed to conection"));
      }
    }
  }
);
