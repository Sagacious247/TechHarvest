import { Request, Response, NextFunction } from "express";

export const authorize = (
  ...roles: string[]
) => {

  return (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {

    if (!req.user) {

      res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });

      return;

    }

    // if (!roles.includes(req.user.role)) {

    //   res.status(403).json({
    //     success: false,
    //     message: "Forbidden.",
    //   });

    //   return;

    // }

    if (!roles.includes(req.user.role)) {

  res.status(403).json({
    success: false,
    message: "Forbidden.",
    currentRole: req.user.role,
    allowedRoles: roles,
    user: req.user,
  });

  return;

}

    next();

  };

};



