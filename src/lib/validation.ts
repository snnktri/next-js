import { z } from 'zod';


export const formSchema = z.object({
    email: z.string().email("Invlid email address."),
    password: z.string().min(8, "Password must be minimum 8."),
});

export const signUpSchema = z
  .object({
    fName: z.string().min(2, "First name must be at least 2 characters."),
    lName: z.string().min(2, "Last name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });



export type FormLoginData = z.infer<typeof formSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;