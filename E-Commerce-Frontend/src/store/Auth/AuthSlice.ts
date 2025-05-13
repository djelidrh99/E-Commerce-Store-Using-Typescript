import { TLoading } from '@/types/loadingType';
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '@store/Auth/AuthThunk/authLoginThunk';
type authState = {
    accessToken : string
    user : {
        id:string;
        name:string;
        email:string;
    } | null
    loading : TLoading;
    error : null | string
}


const initialState :authState ={
accessToken:"",
user:null,
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
        },
        logout:(state)=>{
            state.accessToken = ""
            state.user = null
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
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
            state.error = null

        })
        builder.addCase(loginUser.rejected,(state,action)=> {
            state.loading = "failed"
            state.error = action.payload as string
            state.accessToken = ""
        })


    } 
})


export const {resetUi,logout} = authSlice.actions

export default authSlice.reducer