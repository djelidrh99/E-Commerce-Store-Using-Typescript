import Heading from "@/components/common/Heading/Heading"
import { Button} from "@chakra-ui/react"

import Inputs from "@/components/forms/Inputs";
import useLogin from "@/hooks/useLogin";







const Login = () => {

  const {errors,handleSubmit,onSubmit,register} = useLogin()



  

  return (
    <>
    <Heading title={"Login"} />
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex-1 py-10 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-md">
    <Inputs label="Email" name="email" register={register} error={errors.email?.message as string} type="email"/>
    <Inputs label="Password" name="password" register={register} error={errors.password?.message as string} type="password"/>
    <Button type="submit" className="bg-[var(--bg-secondary)] w-1/2">Login</Button>
    
        
    </form>
    </>
  )
}

export default Login