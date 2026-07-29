"use client";

import { useEffect, useState } from "react";
import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import { getDashboardStatistics } from "@/services/adminDashboard.service";
import { AdminDashboardData } from "@/types/adminDashboard";

export default function AdminDashboardPage() {
  const [dashboard, setDashboard] =
    useState<AdminDashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data =
          await getDashboardStatistics();
        setDashboard(data);
      } catch (err: any) {
        console.error(err);
        setError(
          err?.response?.data?.message ||
          "Failed to load dashboard."
        );

      } finally {

        setLoading(false);

      }

    };

    loadDashboard();

  }, []);

  if (loading) {

    return (

      <div className="flex items-center justify-center h-[70vh]">

        <div className="text-lg font-semibold text-gray-500">

          Loading Dashboard...

        </div>

      </div>

    );

  }

  if (error) {

    return (

      <div className="bg-red-100 border border-red-300 rounded-xl p-5 text-red-600">

        {error}

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-slate-800">

          Welcome Back 👋

        </h1>

        <p className="text-gray-500 mt-2">

          Here's what's happening across TechHarvest today.

        </p>

      </div>

      {/* Statistics */}

      {dashboard && (

        <DashboardStats

          statistics={dashboard.statistics}

        />

      )}

      {/* Placeholder Sections */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <h2 className="text-xl font-semibold mb-4">

            Recent Students

          </h2>

          <p className="text-gray-500">

            This section will display the latest registered students.

          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <h2 className="text-xl font-semibold mb-4">

            Recent Payments

          </h2>

          <p className="text-gray-500">

            This section will display the latest successful payments.

          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h2 className="text-xl font-semibold mb-4">

          Recent Enrollments

        </h2>

        <p className="text-gray-500">

          This section will display the latest enrollments.

        </p>

      </div>

    </div>

  );

}