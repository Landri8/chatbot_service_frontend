import {z} from 'zod'

export const BlogUpdateFormSchema = z.object({
    id: z.string(),
    title: z.string().min(3, "Title must be at least 3 characters").max(1000, "Title must be at most 50 characters"),
    content: z.string().min(3, "Content must be at least 3 characters").max(100000, "Content must be at most 1000 characters"),
    coverImage: z.string()
})

export type BlogUpdateFormData = z.infer<typeof BlogUpdateFormSchema>