import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getCartThunk = createAsyncThunk("cart/getCart", async (_,thunkApi) => {
    const { rejectWithValue, getState,signal } = thunkApi;

    const {cart}=getState() as RootState

    const cartCaracter= Object.keys(cart.itemId).map((item)=>{
        return (`id=${item}&`)
    }).join("")
    try {
        if(cartCaracter.length===0) {
            return []
        }
        const responsee = await axios.get(`/products?${cartCaracter}`,{signal})
        return responsee.data
        
    } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data || error.message);
              } else {
                return rejectWithValue(("failed to conection"));
              }
        
    }



})