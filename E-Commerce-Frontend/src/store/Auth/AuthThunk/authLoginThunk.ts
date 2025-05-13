import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TLoginDataProps = {
    email:string;
    password:string
}

type TLoginResponse = {
    accessToken:string;
    user : {
        id:string;
        name:string;
        email:string;
    }
}

export const loginUser = createAsyncThunk("auth/loginUser", async ( data : TLoginDataProps,thunkAPi )=>{


    const {rejectWithValue} = thunkAPi
    try {
console.log("login")
        const response = await axios.post<TLoginResponse>("/login", {
            email:data.email,
            password:data.password
        })
        console.log("login response",response.data.accessToken)

        return response.data
        
    } catch (error) {
        return rejectWithValue(isAxiosErrorHandler(error))
        
    }

})