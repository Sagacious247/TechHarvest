import { z } from "zod";

export const createLessonSchema = z.object({

  title: z
    .string()
    .min(
      3,
      "Lesson title must be at least 3 characters."
    ),

  description: z
    .string()
    .optional(),

  video: z.object({

    url: z
      .string()
      .url("Invalid video URL."),

    publicId: z
      .string()
      .min(
        1,
        "Video publicId is required."
      ),

  }),

  notes: z
    .string()
    .optional(),

  resources: z
    .array(

      z.object({

        name: z
          .string()
          .min(
            1,
            "Resource name is required."
          ),

        url: z
          .string()
          .url("Invalid resource URL."),

      })

    )
    .optional(),

  duration: z
    .number()
    .nonnegative(
      "Duration cannot be negative."
    ),

  order: z
    .number()
    .positive(
      "Lesson order must be greater than zero."
    ),

  isPreview: z
    .boolean()
    .optional(),

  module: z
    .string()
    .regex(
      /^[0-9a-fA-F]{24}$/,
      "Invalid module ID."
    ),

});