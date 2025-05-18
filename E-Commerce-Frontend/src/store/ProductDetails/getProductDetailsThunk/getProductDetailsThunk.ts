import { TLoading } from "@/types/loadingType";
import { TProduct } from "@/types/productType";
import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducDetailsThunk=createAsyncThunk(
    "productDetails/getProductDetailsThunk",async (id:number,thunkApi)=>{

        const{rejectWithValue,signal}=thunkApi

        try {
                const res = await axios.get<TProduct[]>(`/products?id=${id}`,{signal})
                console.log(res.data[0])
                return res.data[0]
            
            



            
        } catch (error) {
                return rejectWithValue(isAxiosErrorHandler(error))
        }


})