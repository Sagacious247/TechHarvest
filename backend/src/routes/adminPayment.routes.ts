import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import { authenticate } from "../middlewares/authenticate";

import { authorize } from "../middlewares/authorize";

import {
    getAllPaymentHistoryController,
} from "../controllers/paymentHistory.controller";

const router = Router();

router.get(

    "/",

    authenticate,

    authorize("super_admin"),

    asyncHandler(
        getAllPaymentHistoryController
    )

);

export default router;