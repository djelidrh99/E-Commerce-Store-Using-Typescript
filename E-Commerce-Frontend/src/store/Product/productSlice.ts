import { TLoading } from "@/types/loadingType";
import { TProduct } from "@/types/productType";
import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk } from "./thunk/getProductThunk";

type TProductProps ={
    productsFullInfo:TProduct[];
    loading:TLoading;
    error:null|string
}


const initialState:TProductProps ={
    productsFullInfo:[],
    loading:"idle",
    error:null


}


export const producteSlice =createSlice({
    name:"product",
    initialState,
    reducers:{
        productsCleanUp:(state)=>{
            state.productsFullInfo=[]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProductThunk.pending,(state)=>{
            state.loading="pending"
            state.error=null

        }).addCase(getProductThunk.fulfilled,(state,action)=>{
            state.productsFullInfo=action.payload
            state.loading="successed"

        }).addCase(getProductThunk.rejected,(state,action)=>{
            state.loading="failed"
            state.error=action.payload as string

        })



    }
})


export const {productsCleanUp}= producteSlice.actions
export default producteSlice.reducer