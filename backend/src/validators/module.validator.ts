import { z } from "zod";

export const createModuleSchema = z.object({

  title: z
    .string()
    .min(3, "Module title must be at least 3 characters."),

  description: z
    .string()
    .optional(),

  order: z
    .number()
    .positive("Module order must be greater than zero."),

  course: z
    .string()
    .regex(
      /^[0-9a-fA-F]{24}$/,
      "Invalid course ID."
    ),

});