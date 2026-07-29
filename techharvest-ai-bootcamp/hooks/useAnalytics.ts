"use client";

import { useEffect, useState } from "react";

import { getAnalytics } from "@/services/adminAnalytics.service";
import { AnalyticsData } from "@/types/analytics";

export function useAnalytics() {
  const [analytics, setAnalytics] =
    useState<AnalyticsData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    async function load() {

      try {

        const data =
          await getAnalytics();

        setAnalytics(data);

      } catch {

        setError(
          "Unable to load analytics."
        );

      } finally {

        setLoading(false);

      }

    }

    load();

  }, []);

  return {

    analytics,

    loading,

    error,

  };

}