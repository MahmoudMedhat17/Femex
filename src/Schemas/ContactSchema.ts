import { z } from "zod";

const contactSchema = z.object({
    userName: z.string().min(1,"Username is requried"),
    email: z.email({ message: "Invalid email address" }),
    phone: z.string().min(1,"Phone Number is required").optional().refine(
        (val) => !val || /^\+?[0-9]\d{1,14}$/.test(val.replace(/\s/g, "")),
        { message: "Invalid phone number" }
    ),
    message: z.string().min(1,"Message is required"),
    service: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactSchema>;
export { contactSchema };