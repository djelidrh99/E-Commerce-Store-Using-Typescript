import { TLoading } from '@/types/loadingType';
import { TProduct } from "@/types/productType";
import { createSlice } from "@reduxjs/toolkit";

type TCartProps ={
    itemId: { [key: number]: number }
    cartProductFullInfo: TProduct[]
    Loading:TLoading;
    error:null | string
}

const initialState:TCartProps={
    itemId:{},
    cartProductFullInfo:[],
    Loading:"idle",
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

    }    

    }

})

export const {addProduct}= cartSlice.actions

export default cartSlice.reducer