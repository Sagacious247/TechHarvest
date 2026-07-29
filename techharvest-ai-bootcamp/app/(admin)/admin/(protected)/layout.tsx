"use client";

import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminHeader from "@/components/admin/layout/AdminHeader";

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border bg-white shadow">

      {/* Header */}
      <AdminHeader />

      <div className="flex">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main
          className="
            flex-1
            mt-20
            lg:ml-72
            min-w-0
            min-h-[calc(100vh-80px)]
            px-4
            sm:px-6
            lg:px-8
            py-8
            overflow-x-hidden
          "
        >
          <div className="w-full min-w-0">

            {children}

          </div>
        </main>

      </div>

    </div>
  );
}