import { z } from "zod";



const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).regex(/[^a-zA-Z0-9]/,{ message: "Password must contain at least one special character" }),  
    confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data.confirmPassword,  
{
  message :"Passwords don't match",
  path: ["confirmPassword"],
});

type registerType = z.infer<typeof registerSchema>;

export { registerSchema, type registerType };