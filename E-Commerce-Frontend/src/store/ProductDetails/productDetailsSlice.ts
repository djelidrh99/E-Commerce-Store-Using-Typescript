import { TLoading } from "@/types/loadingType";
import { TProduct } from "@/types/productType";
import { createSlice } from "@reduxjs/toolkit";
import { getProducDetailsThunk } from "./getProductDetailsThunk/getProductDetailsThunk";



type TProductDetailsState = {
  imgGroup: string[];
  productFullInfo: TProduct;
  loading: TLoading;
  error: null | string;
};

const initialState: TProductDetailsState = {
  imgGroup: [],
  productFullInfo: {} as TProduct,
  loading: "idle",
  error: null,
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder.addCase(getProducDetailsThunk.pending,(state)=>{
        state.loading="pending"
        state.error=null
    })
    builder.addCase(getProducDetailsThunk.fulfilled,(state,action)=>{
      if (action.payload === undefined) {
          state.loading = "failed";
          state.error = "Product not found";
          return;
        }
        state.loading="successed"
        state.imgGroup = action.payload.img_group ?? []
        state.error=null
    })
    builder.addCase(getProducDetailsThunk.rejected,(state,action)=>{
        state.loading="failed"
        state.error=action.payload as string
    })




  },
  
   




},

   








);

export const {} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
