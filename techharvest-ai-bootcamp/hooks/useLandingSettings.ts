"use client";

import { useEffect, useState } from "react";

import {
  getLandingSettings,
} from "@/services/landingSettings.service";

export interface LandingSettings {
  previewVideo?: {
    url: string;
    publicId: string;
    duration?: number;
  };
}

export function useLandingSettings() {

  const [settings, setSettings] =
    useState<LandingSettings | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      try {

        const data =
          await getLandingSettings();

        setSettings(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, []);

  return {

    settings,

    loading,

  };

}