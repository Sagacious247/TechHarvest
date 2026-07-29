import "express";

declare global {

  namespace Express {

    interface UserPayload {

      id: string;

      email: string;

      role: "super_admin" | "admin";

      type: "admin" | "student";

    }

    interface Request {

      user?: UserPayload;

    }

  }

}

export {};