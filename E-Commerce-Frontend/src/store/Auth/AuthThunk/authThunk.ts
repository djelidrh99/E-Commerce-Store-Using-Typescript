import isAxiosErrorHandler from "@/util/isAxiosError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type registerDataProps = {
    name :string;
    email:string;
    password:string
}

export const registerUser = createAsyncThunk("auth/registerUser", async ( data : registerDataProps,thunkAPi )=>{


    const {rejectWithValue} = thunkAPi
    try {
console.log("register")
        const response = await axios.post("/users", {
            name :data.name,
            email:data.email,
            password:data.password
        })
        
    } catch (error) {
        return rejectWithValue(isAxiosErrorHandler(error))
        
    }

})