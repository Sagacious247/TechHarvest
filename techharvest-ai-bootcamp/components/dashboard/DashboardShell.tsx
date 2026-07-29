"use client";

import { ReactNode } from "react";

import { SidebarProvider } from "@/contexts/SidebarContext";

import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <SidebarProvider>

      <div className="min-h-screen bg-slate-100">

  {/* Sidebar */}

  <DashboardSidebar />

  {/* Main Content */}

  <div className="lg:ml-72 min-h-screen flex flex-col">

    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      <DashboardNavbar />

    </header>

    <main className="flex-1">

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {children}

      </div>

    </main>

  </div>

</div>
    </SidebarProvider>
  );
}