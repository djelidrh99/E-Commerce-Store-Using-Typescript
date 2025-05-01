import { Field, Input, Spinner } from "@chakra-ui/react";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputsProps<TFeildsdVlaue extends FieldValues> = {
  label: string;
  type: string;
  name: Path<TFeildsdVlaue>;
  register: UseFormRegister<TFeildsdVlaue>;
  error: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  checkingText?: string;
  errorText?: string;
  successText?: string;
};

const Inputs = <TFeildsdVlaue extends FieldValues>({
  label,
  register,
  type,
  name,
  error,
  onBlur,
  checkingText,
  errorText,
  successText
}: InputsProps<TFeildsdVlaue>) => {

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
  if(onBlur) {
    onBlur(e)
     register(name).onBlur(e)


  } else {
    register(name).onBlur(e)

  }

  }

  return (
    <Field.Root className="w-full md:w-1/2" invalid={error ? true : false}>
      <Field.Label className="text-black">{label}</Field.Label>
      <Input
        type={type}
        {...register(name)}
        onBlur={onBlurHandler}
        className="text-black border border-gray-400 focus:border-gray-700  pl-2"
      />
      <Field.ErrorText>{error}</Field.ErrorText>
      {checkingText && (
        <Field.HelperText className="text-gray-600 font-semibold">Checking...</Field.HelperText> 
      ) }

      {successText && (
   <Field.HelperText className="text-green-400 font-semibold">email is available</Field.HelperText> 
      )}

      {errorText && (
           <Field.HelperText className="text-red-500">email is not available</Field.HelperText>

      )}
       
      
      
    

      
    </Field.Root>
  );
};

export default Inputs;
