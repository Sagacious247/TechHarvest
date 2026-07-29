"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut, MonitorPlay, X } from "lucide-react";

import {
  LayoutDashboard,
  BookOpen,
  FolderOpen,
  Users,
  CreditCard,
  Receipt,
  Award,
  BarChart3,
  Settings,
} from "lucide-react";

import { useAdminSidebar } from "@/contexts/AdminSidebarContext";
import { useEffect } from "react";
import { logoutAdmin } from "@/lib/logout";

const links = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Modules",
    href: "/admin/modules",
    icon: FolderOpen,
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: Users,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Receipts",
    href: "/admin/receipts",
    icon: Receipt,
  },
  {
    title: "Certificates",
    href: "/admin/certificates",
    icon: Award,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
  title: "Landing",
  href: "/admin/settings/landing",
  icon: MonitorPlay,
},
];

export default function AdminSidebar() {

  const pathname = usePathname();

  const {
    open,
    closeSidebar,
  } = useAdminSidebar();



  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  return (
    <>
      {/* Mobile Backdrop */}

      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
  className={`
    fixed
    top-20
    left-0
    h-[calc(100vh-80px)]
    w-72

    bg-[#08142D]

    text-white

    flex
    flex-col

    transition-transform
    duration-300

    z-50

    ${open ? "translate-x-0" : "-translate-x-full"}

    lg:translate-x-0
    lg:z-40
  `}
>
        {/* Header */}

        <div className="px-8 py-6 border-b border-slate-700 flex justify-between items-center">

          <div>

            <Image
              src="/logo.png"
              alt="TechHarvest"
              width={44}
              height={44}
            />

            <h1 className="mt-3 text-2xl font-bold">

              TechHarvest

            </h1>

            <p className="text-sm text-slate-400">

              Admin Portal

            </p>

          </div>

          <button
            onClick={closeSidebar}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">

          {links.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className={`
                  flex items-center gap-4
                  rounded-xl
                  px-5 py-4
                  transition-all

                  ${
                    active
                      ? "bg-green-600"
                      : "hover:bg-[#10203F]"
                  }
                `}
              >
                <Icon size={20} />

                <span>

                  {item.title}

                </span>

              </Link>
            );

          })}
        </nav>

        {/* Footer */}
         {/* Bottom Profile */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-3">

          <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center font-bold">

            A

          </div>

          <div className="flex-1">

            <p className="font-semibold">

              Administrator

            </p>

            <p className="text-xs text-slate-400">

              TechHarvest LMS

             </p>

           </div>

         </div>

          <button
          className="mt-5 w-full flex items-center justify-center gap-3 rounded-xl bg-red-500 hover:bg-red-600 transition py-3"
              onClick={logoutAdmin}
          >
              Logout
          </button>

       </div>

      </aside>
    </>
  );
}
