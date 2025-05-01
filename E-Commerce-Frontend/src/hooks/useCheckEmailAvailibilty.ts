import { useState } from "react"
import axios from "axios"

type TCheckStatus = "idle" | "available" | "not available" | "checking" | "failed"

const useCheckEmailAvailibilty = () => {
    const [emailStatusAvailibility, setEmailStatusAvailibility] = useState<TCheckStatus>("idle")
    const [entredEmail, setEnteredEmail] = useState<string>("")


    const checkEmailAvailibility = async (email:string) => {
        setEmailStatusAvailibility("checking")
        setEnteredEmail(email)
try {
    const response = await axios.get(`/users?email=${email}`)

    console.log(response.data)

    if(response.data.length > 0) {
        setEmailStatusAvailibility("not available")
    }
    else {
        setEmailStatusAvailibility("available")
    }
    
} catch (error) {
    setEmailStatusAvailibility("failed")
    
}
       

    }

    const resetEmailCheckStatus = () => {
        setEmailStatusAvailibility("idle")
        setEnteredEmail("")}

    return { emailStatusAvailibility, checkEmailAvailibility,entredEmail, resetEmailCheckStatus }       
}

export default useCheckEmailAvailibilty