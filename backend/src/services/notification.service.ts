import Notification from "../models/notification.model";

/**
 * Create Notification
 */
export const createNotification = async (

  studentId: string,

  title: string,

  message: string,

  type:
    | "welcome"
    | "payment"
    | "certificate"
    | "lesson"
    | "announcement"

) => {

  return await Notification.create({

    student: studentId,

    title,

    message,

    type,

  });

};

/**
 * Get Student Notifications
 */
export const getStudentNotifications =
async (

  studentId: string

) => {

  return await Notification.find({

    student: studentId,

  })

  .sort({

    createdAt: -1,

  });

};

/**
 * Mark Notification as Read
 */
export const markNotificationRead =
async (

  notificationId: string

) => {

  return await Notification.findByIdAndUpdate(

    notificationId,

    {

      read: true,

    },

    {

      new: true,

    }

  );

};