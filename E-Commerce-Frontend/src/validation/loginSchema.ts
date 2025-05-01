import { z } from "zod";



const loginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),  
})

type loginType = z.infer<typeof loginSchema>;

export { loginSchema, type loginType };