"use client";

import { useEffect, useState } from "react";

import {
  getNotifications,
  markNotificationAsRead,
} from "@/lib/api";

import { Notification } from "@/types/notification";

export const useNotifications = () => {

  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [loading, setLoading] =
    useState(true);

  /**
   * Load notifications
   */
  const loadNotifications = async () => {

    try {

      const response =
        await getNotifications();

      setNotifications(response.data);

    } catch (error) {

      console.error(
        "Notification Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadNotifications();

  }, []);

  /**
   * Mark as read
   */
  const markAsRead = async (
    id: string
  ) => {

    try {

      await markNotificationAsRead(id);

      setNotifications((prev) =>

        prev.map((notification) =>

          notification._id === id
            ? {
                ...notification,
                read: true,
              }
            : notification

        )

      );

    } catch (error) {

      console.error(error);

    }

  };

  const unreadCount =
    notifications.filter(
      notification => !notification.read
    ).length;

  return {

    notifications,

    unreadCount,

    loading,

    refresh: loadNotifications,

    markAsRead,

  };

};