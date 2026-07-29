"use client";

import { useEffect, useState } from "react";

import { getDashboard } from "@/lib/api";
import { DashboardData } from "@/types/dashboard";

export const useDashboard = () => {

  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const result =
          await getDashboard();

        // result already contains the dashboard object
        setDashboard(result);

      } catch (err) {

        console.error("Dashboard Error:", err);

        setError(
          "Unable to load dashboard."
        );

      } finally {

        setLoading(false);

      }

    };

    loadDashboard();

  }, []);

  return {

    dashboard,

    loading,

    error,

  };

};