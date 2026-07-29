import "express";

declare global {
  namespace Express {
    interface UserPayload {
      id: string;
      email: string;

      role: "student" | "admin" | "super_admin";

      type: "student" | "admin";
    }

    interface Request {
      user?: UserPayload;
    }
  }
}

export {};