"use client";

import { useEffect, useState } from "react";

import {
  getLessons,
  createLesson,
  updateLesson,
  deleteLesson,
  publishLesson,
} from "@/services/adminLessonApi";

import {
  Lesson,
  CreateLessonData,
  UpdateLessonData,
} from "@/types/lesson";

export function useAdminLessons(
  moduleId: string
) {

  const [lessons, setLessons] =
    useState<Lesson[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function loadLessons() {

    if (!moduleId) return;

    try {

      setLoading(true);

      setError("");

      const data =
        await getLessons(moduleId);

      setLessons(data);

    } catch (err: any) {

      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to load lessons."
      );

    } finally {

      setLoading(false);

    }

  }

  async function createNewLesson(
    data: CreateLessonData
  ) {

    await createLesson(data);

    await loadLessons();

  }

  async function updateExistingLesson(
    id: string,
    data: UpdateLessonData
  ) {

    await updateLesson(id, data);

    await loadLessons();

  }

  async function deleteExistingLesson(
    id: string
  ) {

    await deleteLesson(id);

    await loadLessons();

  }

  async function togglePublish(
    id: string
  ) {

    await publishLesson(id);

    await loadLessons();

  }

  useEffect(() => {

    loadLessons();

  }, [moduleId]);

  return {

    lessons,

    loading,

    error,

    refreshLessons: loadLessons,

    createLesson: createNewLesson,

    updateLesson: updateExistingLesson,

    deleteLesson: deleteExistingLesson,

    publishLesson: togglePublish,

  };

}