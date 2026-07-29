import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import { studentAuthenticate }
from "../middlewares/studentAuthenticate";

import { getPaymentHistoryController }
from "../controllers/paymentHistory.controller";

const router = Router();

router.get(

  "/",

  studentAuthenticate,

  asyncHandler(
    getPaymentHistoryController
  )

);

export default router;