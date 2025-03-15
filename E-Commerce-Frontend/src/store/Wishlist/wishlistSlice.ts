import { createSlice } from "@reduxjs/toolkit";

const initialState = [] as any;


export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addProductToWishlist: (state, action) => {
            state.push(action.payload);
        }
    },
});

export const { addProductToWishlist } = wishlistSlice.actions;
 export default wishlistSlice.reducer;