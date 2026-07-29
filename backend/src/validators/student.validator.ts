import { z } from "zod";

export const registerStudentSchema = z.object({

  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters."),

  email: z
    .string()
    .email("Invalid email address."),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters."),

  phone: z
    .string()
    .min(11, "Phone number is required."),

  occupation: z
    .string()
    .optional(),

  experience: z
    .string()
    .optional(),

});