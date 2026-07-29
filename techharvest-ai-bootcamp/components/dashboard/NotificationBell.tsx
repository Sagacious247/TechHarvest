"use client";

import { Bell } from "lucide-react";

import {
  useState,
} from "react";

import { useNotifications }
from "@/hooks/useNotifications";

export default function NotificationBell() {

  const {

    notifications,

    unreadCount,

    markAsRead,

  } = useNotifications();

  const [open, setOpen] =
    useState(false);

  return (

    <div className="relative">

      <button

        onClick={() =>
          setOpen(!open)
        }

        className="relative p-2 rounded-xl hover:bg-slate-100 transition"

      >

        <Bell size={22} />

        {

          unreadCount > 0 && (

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

              {unreadCount}

            </span>

          )

        }

      </button>

      {

        open && (

          <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-xl border z-50">

            <div className="p-5 border-b">

              <h3 className="font-bold">

                Notifications

              </h3>

            </div>

            <div className="max-h-96 overflow-y-auto">

              {

                notifications.length === 0 ? (

                  <p className="p-5 text-gray-500">

                    No notifications.

                  </p>

                ) : (

                  notifications.map(

                    notification => (

                      <button

                        key={notification._id}

                        onClick={() =>
                          markAsRead(
                            notification._id
                          )
                        }

                        className={`w-full text-left p-5 border-b hover:bg-slate-50 transition ${
                          notification.read
                            ? "bg-white"
                            : "bg-green-50 border-l-4 border-green-500"
                        }`}

                      >

                        <h4 className="font-semibold">

                          {notification.title}

                        </h4>

                        <p className="text-sm text-gray-600 mt-1">

                          {notification.message}

                        </p>

                        <p className="text-xs text-gray-400 mt-2">

                          {new Date(
                            notification.createdAt
                          ).toLocaleString()}

                        </p>

                      </button>

                    )

                  )

                )

              }

            </div>

          </div>

        )

      }

    </div>

  );

}