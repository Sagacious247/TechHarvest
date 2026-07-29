"use client";

import { useEffect, useState } from "react";

import { getDashboardStatistics } from "@/services/adminDashboard.service";

import { AdminDashboardData } from "@/types/adminDashboard";

export function useAdminDashboard() {
  const [dashboard, setDashboard] =
    useState<AdminDashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const data =
        await getDashboardStatistics();

      setDashboard(data);

    } catch (err: any) {

      setError(
        err.response?.data?.message ??
          "Failed to load dashboard."
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchDashboard();

  }, []);

  return {

    dashboard,

    loading,

    error,

    refresh: fetchDashboard,

  };
}