import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/validation/loginSchema";
import { useAppDispatch } from "@/store/Hooks/hooks";
import { loginUser } from "@/store/Auth/AuthThunk/authLoginThunk";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/Hooks/hooks";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { resetUi } from "@/store/Auth/AuthSlice";



const useLogin = () => {
   const dispatch = useAppDispatch() 
   const navigate = useNavigate() 
   const {accessToken,loading,error} =useAppSelector((state) => state.auth);
   const [searchParams,setSearchParams] = useSearchParams();

  



 
  
   const { register, handleSubmit, formState: { errors } } = useForm<loginType>({resolver: zodResolver(loginSchema),mode:"onBlur"});
      const onSubmit: SubmitHandler<loginType> = data => {
        if (searchParams.get("message")) {
          setSearchParams("");

        }
        dispatch(loginUser(data)).unwrap().then(()=>{
          navigate("/")

        })

      };

      useEffect(()=>{
        return () => {
          dispatch(resetUi())

        }

      },[dispatch])
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    searchParams,
    loading,
    error,
    accessToken
  }
}

export default useLogin