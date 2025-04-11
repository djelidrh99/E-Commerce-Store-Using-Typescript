import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const addToWishlistThunk = createAsyncThunk(
  "wishlist/addToWishlistThunk", async(id:number,thunkApi)=>{

    const {rejectWithValue}=thunkApi
    try {
        const isProductexist = await axios.get(`/wishlist?productId=${id}`);
        console.log(isProductexist.data)

        if(isProductexist.data.length>0) {
          await axios.delete(`/wishlist/${isProductexist.data[0].id}`)
          return {type:"remove", id}

      }else {
          await axios.post(`/wishlist?${id}}`,{productId:id})
          
          return {type:"add", id}
      }


        
    } catch (error) {
        if (isAxiosError(error)) {
                          return rejectWithValue(error.response?.data || error.message);
                        } else {
                          return rejectWithValue(("failed to conection"));
                        }
        
    }

  })