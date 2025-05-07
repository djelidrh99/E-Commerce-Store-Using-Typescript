import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "@/validation/registerSchema";
import useCheckEmailAvailibilty from "@/hooks/useCheckEmailAvailibilty";
import { useAppDispatch } from "@/store/Hooks/hooks";
import { registerUser } from "@/store/Auth/AuthThunk/authThunk";
import { useNavigate } from "react-router-dom";
import { resetUi } from "@/store/Auth/AuthSlice";
import { useEffect } from "react";

const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    trigger,
  } = useForm<registerType>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<registerType> = (data) => {
    dispatch(registerUser(data)).unwrap().then(()=>{
      navigate("/login?message=account_created");
    })
  };
  const {
    checkEmailAvailibility,
    emailStatusAvailibility,
    entredEmail,
    resetEmailCheckStatus,
  } = useCheckEmailAvailibilty();

  const emailBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && email !== entredEmail) {
      checkEmailAvailibility(email);
    }

    if (isDirty && invalid && entredEmail) {
      resetEmailCheckStatus();
    }
  };

useEffect(()=>{
        return () => {
          dispatch(resetUi())

        }

      },[dispatch])

  return {
    onSubmit,
    register,
    errors,
    emailBlurHandler,
    emailStatusAvailibility,
    handleSubmit,
  };
};

export default useRegister;
