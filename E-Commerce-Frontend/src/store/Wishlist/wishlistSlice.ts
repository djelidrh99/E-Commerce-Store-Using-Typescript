import { TLoading } from "@/types/loadingType";
import { TProduct } from "@/types/productType";
import { createSlice } from "@reduxjs/toolkit";
import { addToWishlistThunk } from "@store/Wishlist/thunk/addToWishlistThunk";
import { getWishlistThunk } from "@store/Wishlist/thunk//getWishlist";

type TWishlistState = {
  productFullInfo: TProduct[];
  itemId: number[];
  loading: TLoading;
  error: null | string;
};

const initialState: TWishlistState = {
  productFullInfo: [],
  itemId: [],
  loading: "idle",
  error: null,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlistCleanUp:(state)=>{
        state.productFullInfo=[]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addToWishlistThunk.pending, (state) => {
        state.loading="pending"
        state.error=null
    }).addCase(addToWishlistThunk.fulfilled, (state, action) => {
        if(action.payload.type==="add"){
            state.itemId.push(action.payload.id)
        }else{
            state.itemId=state.itemId.filter((id)=>id!==action.payload.id)
            state.productFullInfo=state.productFullInfo.filter((item)=>item.id!==action.payload.id)
        }
        state.loading="successed"
    }).addCase(addToWishlistThunk.rejected, (state, action) => {
        state.loading="failed"
        state.error=action.payload as string
    });

    builder.addCase(getWishlistThunk.pending, (state) => {
      state.loading="pending"
      state.error=null
  }).addCase(getWishlistThunk.fulfilled, (state, action) => {
      if(action.payload?.type==="itemId"){
          state.itemId =action.payload.idList
      }else if(action.payload?.type==="productFullInfo"){
          state.productFullInfo=action.payload.productFullInfo
      }
      state.loading="successed"
  }).addCase(getWishlistThunk.rejected, (state, action) => {
      state.loading="failed"
      state.error=action.payload as string
  });




  },




});

export const {wishlistCleanUp} = wishlistSlice.actions;
export default wishlistSlice.reducer;
