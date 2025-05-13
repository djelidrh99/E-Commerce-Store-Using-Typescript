import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "@/store/store";

type TFetchwishlist = "productFullInfo" | "itemId";

export const getWishlistThunk = createAsyncThunk(
  "wishlist/getWishlist",
  async (dataType: TFetchwishlist, thunkApi) => {
    const { rejectWithValue, signal ,getState} = thunkApi;
        const { auth } = getState() as RootState;
    
    try {
      const isProductexist = await axios.get(`/wishlist?userId=${auth.user?.id}`);
      
      if (isProductexist.data.length === 0) {
        return { type: "productFullInfo", productFullInfo: [] };
      }

     

      const itemId = isProductexist.data.map(
        (item: { productId: number,userId:number }) => item.productId
      );

      console.log(itemId);

      const idListTostring = itemId
        .map((item: number) => `id=${item}&`)
        .join("");


      if (dataType === "itemId") {
        return { type: "itemId", idList: itemId };
      } else if (dataType === "productFullInfo") {
        const productFullInfo = await axios.get(`/products?${idListTostring}`, {
          signal,
        });

        return {
          type: "productFullInfo",
          productFullInfo: productFullInfo.data,
        };
      }
    } catch (error) {
      return rejectWithValue(isAxiosErrorHandler(error));
    }
  }
);
