import {z} from 'zod'

export const userUpdateFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be at most 50 characters"),
    email: z.string().email("Please enter a valid email"),
    role: z.string().nonempty("Role is required"),
})

export type UserUpdateFormData = z.infer<typeof userUpdateFormSchema>;