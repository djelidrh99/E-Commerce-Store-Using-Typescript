import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {  isAxiosError } from "axios";

export const getProductThunk=createAsyncThunk(
    "product/getProductThunk",async (_,thunkApi)=>{

        const{rejectWithValue,signal}=thunkApi

        try {
                const res = await axios.get("/products",{signal})
                return res.data 
            
            



            
        } catch (error) {
            if (isAxiosError(error)) {
                    return rejectWithValue(error.response?.data || error.message);
                  } else {
                    return rejectWithValue(("failed to conection"));
                  }
        }


})
