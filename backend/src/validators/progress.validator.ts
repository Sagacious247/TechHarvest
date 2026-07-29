import { z } from "zod";

export const updateProgressSchema = z.object({

  lessonId: z
    .string()
    .min(1, "Lesson ID is required."),

  currentTime: z
    .number()
    .min(0, "Current time cannot be negative."),

  duration: z
    .number()
    .positive("Duration must be greater than zero."),

});