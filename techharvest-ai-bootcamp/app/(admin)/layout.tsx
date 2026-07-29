"use client";

import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { AdminSidebarProvider } from "@/contexts/AdminSidebarContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <AdminAuthProvider>

    <AdminSidebarProvider>
      {children}
    </AdminSidebarProvider>

    </AdminAuthProvider>

  );
}