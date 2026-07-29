import { z } from "zod";

export const createCourseSchema = z.object({

  title: z
    .string()
    .min(3, "Course title must be at least 3 characters."),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters."),

  price: z
    .number()
    .positive("Price must be greater than zero."),

  duration: z
    .string()
    .min(2, "Duration is required."),

  level: z.enum([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]),

  thumbnail: z
    .string()
    .optional(),

});
