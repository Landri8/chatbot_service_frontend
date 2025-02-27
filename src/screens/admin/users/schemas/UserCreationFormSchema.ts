import {z} from 'zod'

export const UserCreationFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be at most 50 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    role: z.string().nonempty("Role is required"),
})

export type UserCreationFormData = z.infer<typeof UserCreationFormSchema>;