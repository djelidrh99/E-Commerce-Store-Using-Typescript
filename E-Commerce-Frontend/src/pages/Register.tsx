import Heading from "@/components/common/Heading/Heading"
import { Button } from "@chakra-ui/react"
import Inputs from "@/components/forms/Inputs";
import useRegister from "@/hooks/useRegister";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";









const Register = () => {

  const {emailBlurHandler,emailStatusAvailibility,errors, onSubmit,register,handleSubmit,accessToken} = useRegister()
  if (accessToken) {
    return  <Navigate to={"/"} />
}




  

  return (
    <>
    <Heading title={"Create Account"} />
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex-1 py-10 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-md">
   <Inputs label="Full Name" name="name" register={register} error={errors.name?.message as string} type="text"/>
    <Inputs label="Email"  name="email" register={register} error={errors.email?.message as string} onBlur={emailBlurHandler}  type="text"
    checkingText={emailStatusAvailibility === "checking" ? "checking...": "" }
    successText={emailStatusAvailibility === "available" ? "email is Available": "" }
    errorText  ={emailStatusAvailibility === "not available" ? "email is not avilable": emailStatusAvailibility === "failed" ? "error from server" : "" }
    
    />
    <Inputs label="Password" name="password" register={register} error={errors.password?.message as string} type="password"/>
    <Inputs label="Confirm Password" name="confirmPassword" register={register} error={errors.confirmPassword?.message as string} type="password"/>
    <Button type="submit" className="bg-[var(--bg-secondary)] w-1/2">Sign Up</Button>
      <p className="text-sm text-gray-500">
              Aleardy have an account?{" "}
              <NavLink to={"/login"} className="text-[var(--bg-secondary)]">
                Login
              </NavLink>
            </p>
    
        
    </form>
    </>
  )
}

export default Register