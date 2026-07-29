import { ZodTypeAny, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

const validate =
  (schema: ZodTypeAny) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      console.log("BODY:", req.body);
      schema.parse(req.body);

      next();

    } catch (error) {

      if (error instanceof ZodError) {

        return res.status(400).json({

          success: false,

          message: "Validation failed.",

          errors: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),

        });

      }

      next(error);

    }

  };

export default validate;
