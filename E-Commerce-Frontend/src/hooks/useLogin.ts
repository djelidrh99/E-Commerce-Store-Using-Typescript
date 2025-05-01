import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@/validation/loginSchema";

const useLogin = () => {
      const { register, handleSubmit, formState: { errors } } = useForm<loginType>({resolver: zodResolver(loginSchema),mode:"onBlur"});
      const onSubmit: SubmitHandler<loginType> = data => console.log(data);
  return {
    register,
    handleSubmit,
    errors,
    onSubmit
  }
}

export default useLogin