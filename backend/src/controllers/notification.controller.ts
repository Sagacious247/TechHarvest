import { Request, Response } from "express";

import {
  getStudentNotifications,
  markNotificationRead,
} from "../services/notification.service";

/**
 * Get Student Notifications
 */
export const getNotificationsController =
async (

  req: Request,

  res: Response

): Promise<void> => {

  const notifications =
    await getStudentNotifications(
      req.user!.id
    );

  res.status(200).json({

    success: true,

    data: notifications,

  });

};

/**
 * Mark Notification Read
 */
export const markNotificationReadController =
async (

  req: Request,

  res: Response

): Promise<void> => {

  const notificationId = Array.isArray(
    req.params.id
  )
    ? req.params.id[0]
    : req.params.id;

  const notification =
    await markNotificationRead(
      notificationId
    );

  res.status(200).json({

    success: true,

    data: notification,

  });

};