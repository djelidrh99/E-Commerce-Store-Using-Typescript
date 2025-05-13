import Heading from "@/components/common/Heading/Heading";
import { Alert, Button } from "@chakra-ui/react";
import Inputs from "@/components/forms/Inputs";
import useLogin from "@/hooks/useLogin";
import { NavLink } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";


const Login = () => {
  const { errors, handleSubmit, onSubmit, register,loading,searchParams,error,accessToken } = useLogin();
  
  if (accessToken) {
    return  <Navigate to={"/"} />
}


  

  return (
    <>
      <Heading title={"Login"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white flex-1 relative py-10 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-md"
      >
        {
          searchParams.get("message") === "account_created" && (
            <Alert.Root status="success" variant={"solid"}>
            <Alert.Indicator />
            <Alert.Title>Account is successfully created.</Alert.Title>
          </Alert.Root>
          )
        }

{
          searchParams.get("message") === "Login_is_required" && (
            <Alert.Root status="error" variant={"solid"}>
            <Alert.Indicator />
            <Alert.Title>Login is required to access this page.</Alert.Title>
          </Alert.Root>
          )
        }


        <Inputs
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message as string}
          type="email"
        />
        <Inputs
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message as string}
          type="password"
        />
        { loading === "failed" && 
          <p className="text-sm -mt-3 text-red-500">
        {error}
        </p>
        }
        
        <Button type="submit" className="bg-[var(--bg-secondary)] w-1/2">
          Login
        </Button>
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <NavLink to={"/register"} className="text-[var(--bg-secondary)]">
            Register
          </NavLink>
        </p>
      {loading === "pending" && 
        <div className="text-black absolute flex justify-center items-center bg-black/10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      
                        <Spinner
                          size={"lg"}
                          className="border  border-transparent border-t-gray-800"
                        />
                      
        </div> }


      </form>
    </>
  );
};

export default Login;
