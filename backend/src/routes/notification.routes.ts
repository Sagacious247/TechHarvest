import { Router } from "express";

import asyncHandler from "../middlewares/asyncHandler";

import { studentAuthenticate }
from "../middlewares/studentAuthenticate";

import {

  getNotificationsController,

  markNotificationReadController,

} from "../controllers/notification.controller";

const router = Router();

/**
 * Student Notifications
 */
router.get(

  "/",

  studentAuthenticate,

  asyncHandler(

    getNotificationsController

  )

);

/**
 * Mark Read
 */
router.put(

  "/:id/read",

  studentAuthenticate,

  asyncHandler(

    markNotificationReadController

  )

);

export default router;