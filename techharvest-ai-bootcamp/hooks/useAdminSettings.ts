"use client";

import { useEffect, useState } from "react";

import { Settings } from "@/types/settings";

import {
  getSettings,
  updateSettings,
} from "@/services/adminSettings.service";

export function useAdminSettings() {

  const [settings, setSettings] =
    useState<Settings | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    try {

      const data =
        await getSettings();

      setSettings(data);

    } finally {

      setLoading(false);

    }

  }

  async function save(
    values: Partial<Settings>
  ) {

    setSaving(true);

    try {

      const updated =
        await updateSettings(values);

      setSettings(updated);

    } finally {

      setSaving(false);

    }

  }

  return {

    settings,

    loading,

    saving,

    save,

  };

}