import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {  isAxiosError } from "axios";

export const getProductThunk=createAsyncThunk(
    "product/getProductThunk",async (_,thunkApi)=>{

        const{rejectWithValue,signal}=thunkApi

        try {
                const res = await axios.get("/products",{signal})
                return res.data 
            
            



            
        } catch (error) {
                return rejectWithValue(isAxiosErrorHandler(error))
        }


})
