import { TLoading } from '@/types/loadingType';
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '@store/Auth/AuthThunk/authLoginThunk';
type authState = {
    accessToken : string
    loading : TLoading;
    error : null | string
}


const initialState :authState ={
accessToken:"",
loading:'idle',
error:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        resetUi:(state)=>{
            state.loading = "idle"
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending,(state)=> {
            state.loading = "pending"
            state.error = null

        })
        builder.addCase(loginUser.fulfilled,(state,action)=> {
            state.loading = "successed"
            state.accessToken = action.payload

            state.error = null

        })
        builder.addCase(loginUser.rejected,(state,action)=> {
            state.loading = "failed"
            state.error = action.payload as string
            state.accessToken = ""
        })


    } 
})


export const {resetUi} = authSlice.actions

export default authSlice.reducer