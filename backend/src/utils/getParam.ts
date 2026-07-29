import AppError from "./AppError";

export function getParam(
  value: string | string[] | undefined,
  name: string
): string {

  if (!value) {
    throw new AppError(
      `${name} is required.`,
      400
    );
  }

  if (Array.isArray(value)) {
    throw new AppError(
      `Invalid ${name}.`,
      400
    );
  }

  return value;
}