import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TFetchwishlist = "productFullInfo" | "itemId"

export const getWishlistThunk = createAsyncThunk(
  "wishlist/getWishlist", async(dataType:TFetchwishlist,thunkApi)=>{

    const {rejectWithValue,signal}=thunkApi
    try {
      console.log("getWishlistThunk")
        const isProductexist = await axios.get(`/wishlist`);
      if (isProductexist.data.length === 0) {
        return {type:"productFullInfo",productFullInfo:[]}
      }

      const itemId = isProductexist.data.map((item:{productId:number}) => item.productId);
      const idListTostring = itemId.map((item:number) => `id=${item}&`).join("")
      console.log(idListTostring)
       if(dataType === "itemId") {
        return {type:"itemId", idList:itemId}
      }else if(dataType === "productFullInfo") {
       
        const productFullInfo = await axios.get(`/products?${idListTostring}`,{signal})
        
        return {type:"productFullInfo", productFullInfo:productFullInfo.data}
      }


        
    } catch (error) {
        if (isAxiosError(error)) {
                          return rejectWithValue(error.response?.data || error.message);
                        } else {
                          return rejectWithValue(("failed to conection"));
                        }
        
    }

  })