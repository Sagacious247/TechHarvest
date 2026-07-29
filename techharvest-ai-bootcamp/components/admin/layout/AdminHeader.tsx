"use client";

import {
  Menu,
  Search,
  Bell,
  CalendarDays,
} from "lucide-react";

import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useAdminSidebar } from "@/contexts/AdminSidebarContext";

export default function AdminHeader() {

  const { toggleSidebar } = useAdminSidebar();

  const { admin } = useAdminAuth();

  const getGreeting = () => {

    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";

    if (hour < 17) return "Good Afternoon";

    return "Good Evening";

  };

  const today = new Date();

  const formattedDate = today.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (

    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      h-20
      bg-white
      border-b
      shadow-sm
      flex
      items-center
      justify-between
      px-4
      sm:px-6
      lg:px-8
    "
    >

      {/* LEFT */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={toggleSidebar}
          className="lg:hidden"
        >

          <Menu size={28} />

        </button>

        <div>

          <h2 className="text-2xl font-bold text-slate-900">

            {getGreeting()},

            <span className="text-green-600">

              {" "}
              {admin?.fullName?.split(" ")[0]}

            </span>

          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">

            <CalendarDays size={15} />

            <span>{formattedDate}</span>

          </div>

        </div>

      </div>

      {/* CENTER */}

      <div className="hidden lg:flex flex-1 justify-center px-12">

        <div className="relative w-full max-w-xl">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search courses, students, payments..."
            className="
              w-full
              rounded-xl
              border
              bg-slate-50
              py-3
              pl-11
              pr-24
              outline-none
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
            "
          />

          <span
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-xs
              text-slate-400
              border
              rounded
              px-2
              py-1
            "
          >

            Ctrl + K

          </span>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        {/* Notification */}

        <button className="relative">

          <Bell
            size={22}
            className="text-slate-600"
          />

          <span
            className="
              absolute
              -top-1
              -right-1
              h-5
              w-5
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              flex
              items-center
              justify-center
            "
          >

            3

          </span>

        </button>

        {/* Profile */}

        <div className="hidden md:block text-right">

          <p className="font-semibold">

            {admin?.fullName}

          </p>

          <p className="text-sm text-slate-500">

            {admin?.role}

          </p>

        </div>

        <div
          className="
            h-12
            w-12
            rounded-full
            bg-gradient-to-r
            from-green-500
            to-green-700
            text-white
            flex
            items-center
            justify-center
            text-lg
            font-bold
            shadow-md
          "
        >

          {admin?.fullName?.charAt(0).toUpperCase() || "A"}

        </div>

      </div>

    </header>

  );

}
