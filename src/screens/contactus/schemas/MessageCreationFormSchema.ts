import {z} from 'zod'

export const MessageCreationFormSchema = z.object({
    firstName: z.string().min(3, "First name must be at least 3 characters").max(50, "First name must be at most 50 characters").nonempty("First name is required"),
    lastName: z.string().nullable(),
    email: z.string().email("Please enter a valid email").nonempty("Email is required"),
    phone: z.string().min(13, "Phone number must be at least 8 characters").max(20, "Phone number must be at most 20 characters").nonempty("Phone number is required"),
    companyName: z.string().min(3, "Company name must be at least 3 characters").max(50, "Company name must be at most 50 characters").nonempty("Company name is required"),
    country: z.string().nonempty("Country is required"),
    jobTitle: z.string().min(3, "Job title must be at least 3 characters").max(1000, "Job title must be at most 50 characters").nonempty("Job title is required"),
    jobDetails: z.string().min(3, "Job details must be at least 3 characters").max(1000000, "Job details must be at most 50 characters").nonempty("Job details is required"),
})

export type MessageCreationFormData = z.infer<typeof MessageCreationFormSchema>;