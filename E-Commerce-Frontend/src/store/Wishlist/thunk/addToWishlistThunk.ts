import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "@/store/store";

export const addToWishlistThunk = createAsyncThunk(
  "wishlist/addToWishlistThunk",
  async (id: number, thunkApi) => {
    const {getState ,  rejectWithValue } = thunkApi;
    const { auth } = getState() as RootState;
    try {
      const isProductexist = await axios.get(`/wishlist?userId=${auth.user?.id}&productId=${id}`);

      if (isProductexist.data.length > 0) {
        await axios.delete(`/wishlist/${isProductexist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await axios.post(`/wishlist?${auth.user?.id }}`, { productId: id,userId: auth.user?.id });

        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(isAxiosErrorHandler(error));
    }
  }
);
