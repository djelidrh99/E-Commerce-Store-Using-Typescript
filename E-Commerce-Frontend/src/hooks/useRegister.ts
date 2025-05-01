import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "@/validation/registerSchema";
import useCheckEmailAvailibilty from "@/hooks/useCheckEmailAvailibilty";

const useRegister = () => {
      const { register, handleSubmit, formState: { errors }, getFieldState,trigger } = useForm<registerType>({resolver: zodResolver(registerSchema),mode:"onBlur"});
      const onSubmit: SubmitHandler<registerType> = data => console.log(data);
      const {checkEmailAvailibility,emailStatusAvailibility,entredEmail,resetEmailCheckStatus} = useCheckEmailAvailibilty()
      console.log(emailStatusAvailibility)
    
      const emailBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        const email =e.target.value
        await trigger("email")
        const { isDirty,invalid } = getFieldState("email")
        if (isDirty && !invalid && email !== entredEmail) {
          checkEmailAvailibility(email)
        }
    
        if (isDirty && invalid && entredEmail) {
          resetEmailCheckStatus()
        }
        
      }
  return {
    onSubmit,
register,
errors,
emailBlurHandler,
emailStatusAvailibility,
handleSubmit
  }
}

export default useRegister