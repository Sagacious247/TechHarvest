"use client";

import { useEffect, useState } from "react";

import {
  getModules,
  createModule,
  updateModule,
  deleteModule,
} from "@/services/adminModuleApi";

import {
  Module,
  CreateModuleData,
  UpdateModuleData,
} from "@/types/module";

export function useAdminModules(courseId: string) {
  const [modules, setModules] = useState<Module[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  /**
   * Load Modules
   */
  async function loadModules() {
    if (!courseId) return;

    try {
      setLoading(true);
      setError("");

      const data = await getModules(courseId);

      setModules(data);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to load modules."
      );
    } finally {
      setLoading(false);
    }
  }

  /**
   * Create Module
   */
  async function createNewModule(
    data: CreateModuleData
  ) {
    try {
      await createModule(data);

      await loadModules();
    } catch (err) {
      throw err;
    }
  }

  /**
   * Update Module
   */
  async function updateExistingModule(
    id: string,
    data: UpdateModuleData
  ) {
    try {
      await updateModule(id, data);

      await loadModules();
    } catch (err) {
      throw err;
    }
  }

  /**
   * Delete Module
   */
  async function deleteExistingModule(
    id: string
  ) {
    try {
      await deleteModule(id);

      await loadModules();
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    loadModules();
  }, [courseId]);

  return {
    modules,

    loading,

    error,

    refreshModules: loadModules,

    createModule: createNewModule,

    updateModule: updateExistingModule,

    deleteModule: deleteExistingModule,
  };
}