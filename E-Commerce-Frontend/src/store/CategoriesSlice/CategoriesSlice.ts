import { TCategories } from "@/types/categoriesType";
import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk } from "./thunk/getCategoriesThunk";
import { TLoading } from "@/types/loadingType";

type TCategoriesProps= {
    caetgoriesList:TCategories[];
    loading : TLoading;
    error: null | string 
}


const initialState:TCategoriesProps ={
    caetgoriesList:[],
    loading:"idle",
    error:null

}

export const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        categoriesCleanUp:(state)=> {
            state.caetgoriesList=[]

        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getCategoriesThunk.pending,(state)=>{
            state.loading="pending"
            state.error=null
        })
        builder.addCase(getCategoriesThunk.fulfilled,(state,action)=>{
            state.loading="successed"
            state.caetgoriesList =action.payload
        })
        builder.addCase(getCategoriesThunk.rejected,(state, action)=>{
          state.loading="failed"
          state.error=action.payload  as string
            
        })
    }
});



export const {categoriesCleanUp} = categoriesSlice.actions
export default categoriesSlice.reducer
