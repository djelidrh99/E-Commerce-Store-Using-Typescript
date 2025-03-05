import { TLoading } from '@/types/loadingType';
import { TProduct } from "@/types/productType";
import { createSlice } from "@reduxjs/toolkit";
import { getCartThunk } from '@store/Cart/thunk/getCartThunk';

type TCartProps ={
    itemId: { [key: number]: number }
    cartProductFullInfo: TProduct[]
    loading:TLoading;
    error:null | string
}

const initialState:TCartProps={
    itemId:{},
    cartProductFullInfo:[],
    loading:"idle",
    error:null

}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
    addProduct:(state,action)=>{
        if(state.itemId[action.payload]) {
            state.itemId[action.payload]++ 
        } else {
            state.itemId[action.payload]=1
        }

    },
    removeProduct:(state,action)=>{
        delete state.itemId[action.payload]
        state.cartProductFullInfo=state.cartProductFullInfo.filter((item)=>item.id!==action.payload)
    }    

    },
    extraReducers: (builder) => {
        builder.addCase(getCartThunk.pending,(state)=>{
            state.loading="pending"
            state.error=null

        })
        builder.addCase(getCartThunk.fulfilled,(state,action)=>{
            state.loading="successed"
            state.cartProductFullInfo=action.payload

        })
        builder.addCase(getCartThunk.rejected,(state,action)=>{
            state.loading="failed"
            state.error= action.payload as string

        })
    }

})

export const {addProduct,removeProduct}= cartSlice.actions

export default cartSlice.reducer