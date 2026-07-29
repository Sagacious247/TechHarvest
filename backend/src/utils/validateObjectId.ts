import mongoose from "mongoose";
import AppError from "./AppError";

export const validateObjectId = (
  id: string,
  resource: string = "Resource"
): void => {

  if (!mongoose.isValidObjectId(id)) {

    throw new AppError(
      `Invalid ${resource} ID.`,
      400
    );

  }

};