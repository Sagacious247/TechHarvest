"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  User,
  Settings,
  LogOut,
  Receipt,
  ChevronRight,
  X,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { useSidebar } from "@/contexts/SidebarContext";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Certificates",
    href: "/dashboard/certificates",
    icon: Award,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: Receipt,
  },
  {
  title: "Browse Courses",
  href: "/courses",
  icon: ShoppingBag,
},
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  const router = useRouter();

  const { logout, user } = useAuth();

  const { open, setOpen } = useSidebar();

  const handleLogout = () => {
    logout();

    setOpen(false);

    router.replace("/login");
  };

  return (
    <>
      {/* Mobile Backdrop */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-slate-800 bg-[#08142D] text-white transition-transform duration-300

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0`}
      >
        {/* Brand */}

        <div className="border-b border-slate-800 px-8 py-8">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-3xl font-black tracking-tight">

                TechHarvest

              </h1>

              <p className="mt-2 text-sm text-slate-400">

                AI Learning Platform

              </p>

            </div>

            {/* Close Button */}

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 hover:bg-slate-800 lg:hidden"
            >
              <X size={24} />
            </button>

          </div>

        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-5 py-8">

          <div className="space-y-2">

            {links.map((link) => {
              const Icon = link.icon;

              const active =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                    active
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <Icon
                      size={22}
                      className={
                        active
                          ? "text-white"
                          : "text-slate-400"
                      }
                    />

                    <span className="font-medium">

                      {link.title}

                    </span>

                  </div>

                  <ChevronRight
                    size={18}
                    className={`transition ${
                      active
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />

                </Link>
              );
            })}

          </div>

        </nav>

        {/* User */}

        <div className="border-t border-slate-800 p-6">

          <div className="mb-5 rounded-2xl bg-slate-900 p-4">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-lg font-bold">

                {user?.fullName?.charAt(0).toUpperCase() ??
                  "S"}

              </div>

              <div className="min-w-0">

                <p className="truncate font-semibold">

                  {user?.fullName ?? "Student"}

                </p>

                <p className="truncate text-sm text-slate-400">

                  {user?.email}

                </p>

              </div>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 px-5 py-4 font-semibold transition hover:bg-red-600"
          >
            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}