import express, { Request, Response } from "express";

import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { authLimiter } from "../middlewares/rateLimiter";
import Admin from "../models/admin.model";
import {
  registerAdminController,
  loginAdminController,
} from "../controllers/auth.controller";

const router = express.Router();

router.post(
  "/register",
  registerAdminController
);

router.post(
  "/login",
  authLimiter,
  loginAdminController
);

router.get(
  "/profile",
  authenticate,
  authorize("super_admin", "admin"),
  async (req: Request, res: Response) => {

    const admin = await Admin
      .findById(req.user!.id)
      .select("-password");

    if (!admin) {

      return res.status(404).json({

        success: false,

        message: "Admin not found.",

      });

    }

    res.status(200).json({

      success: true,

      user: admin,

    });

  }
);

// router.get(
//   "/profile",
//   authenticate,
//   authorize("super_admin", "admin"),
//   (req: Request, res: Response) => {

//     res.status(200).json({
//       success: true,
//       message: "Authentication & Authorization successful.",
//       user: req.user,
//     });

//   }
// );

export default router;