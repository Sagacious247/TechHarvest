"use client";

import { useAuth } from "@/hooks/useAuth";
import { useDashboard } from "@/hooks/useDashboard";
import NotificationBell from "@/components/dashboard/NotificationBell";
import { useSidebar } from "@/contexts/SidebarContext";
import Link from "next/link";
import { ArrowLeft, Search, ShoppingBag, Menu } from "lucide-react";

export default function DashboardNavbar() {
  const { user } = useAuth();

  const { dashboard } = useDashboard();

  const { setOpen } = useSidebar();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";

    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };

  const greeting = getGreeting();

  const getMotivationalMessage = () => {
    if (!dashboard) {
      return "Welcome to TechHarvest AI Bootcamp.";
    }

    const {
      enrolledCourses,
      resumeLearning,
      stats,
    } = dashboard;

    if (enrolledCourses.length === 0) {
      return "🚀 Your AI journey starts today. Explore our courses and begin learning.";
    }

    if (
      stats.totalLessons > 0 &&
      stats.completedLessons === stats.totalLessons
    ) {
      return "🏆 Outstanding! You have completed your course. Your certificate is ready.";
    }

    if (resumeLearning) {
      return `📚 Continue learning from "${resumeLearning.lesson.title}".`;
    }

    if (stats.completedLessons > 0) {
      return `🔥 You've completed ${stats.completedLessons} lesson${
        stats.completedLessons > 1 ? "s" : ""
      }. Keep going!`;
    }

    return "💡 Keep learning. Every lesson brings you closer to mastery.";
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div>

          <Link
  href="/"
  className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-green-600"
>
  <ArrowLeft size={16} />

  Back to Website
</Link>

          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">

            {greeting},{" "}

            <span className="text-green-600">

              {user?.fullName ?? "Student"}

            </span>

          </h2>

          <p className="mt-1 hidden max-w-2xl text-sm italic text-slate-500 sm:block">

            {getMotivationalMessage()}

          </p>

        </div>

      </div>

      {/* Right */}

<div className="flex items-center gap-3 sm:gap-4">

  {/* Browse Courses */}

  <Link
    href="/courses"
    className="hidden lg:flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
  >
    <ShoppingBag size={18} />

    Browse Courses
  </Link>

  {/* Search */}

  <button className="hidden rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 md:flex">

    <Search size={20} />

  </button>

  {/* Notifications */}

  <NotificationBell />

  {/* Avatar */}

  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-lg font-bold text-white shadow-lg">

    {user?.fullName?.charAt(0).toUpperCase() ?? "S"}

  </div>

</div>

    </header>
  );
}