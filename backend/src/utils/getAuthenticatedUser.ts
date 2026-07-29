import AppError from "./AppError";

export function getAuthenticatedUser(
  user: Express.UserPayload | undefined
): Express.UserPayload {

  if (!user) {
    throw new AppError(
      "Unauthorized.",
      401
    );
  }

  return user;
}