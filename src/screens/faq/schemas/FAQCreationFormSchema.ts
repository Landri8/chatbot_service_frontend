import {z} from 'zod'

export const FAQCreationFormSchema = z.object({
    question: z.string().min(3, "Question must be at least 3 characters").max(100, "Question must be at most 100 characters"),
    answer: z.string().min(3, "Answer must be at least 3 characters").max(1000, "Answer must be at most 1000 characters"),
})

export type FAQCreationFormData = z.infer<typeof FAQCreationFormSchema>;