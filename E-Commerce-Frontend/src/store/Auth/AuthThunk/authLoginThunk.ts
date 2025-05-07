import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type loginDataProps = {
    email:string;
    password:string
}

export const loginUser = createAsyncThunk("auth/loginUser", async ( data : loginDataProps,thunkAPi )=>{


    const {rejectWithValue} = thunkAPi
    try {
console.log("login")
        const response = await axios.post("/login", {
            email:data.email,
            password:data.password
        })
        console.log("login response",response.data.accessToken)

        return response.data.accessToken
        
    } catch (error) {
        return rejectWithValue(isAxiosErrorHandler(error))
        
    }

})