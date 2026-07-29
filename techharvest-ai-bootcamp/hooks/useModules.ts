"use client";

import { useEffect, useState } from "react";

import {

  getModules,

} from "@/services/module.service";

import { Module } from "@/types/module";

export const useModules = (
  courseId: string
) => {

  const [modules, setModules] =
    useState<Module[]>([]);

  const [loading, setLoading] =
    useState(true);

  const loadModules = async () => {

    try {

      const data =
        await getModules(courseId);

      setModules(data);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    if (courseId) {

      loadModules();

    }

  }, [courseId]);

  return {

    modules,

    loading,

    refresh: loadModules,

    setModules,

  };

};