"use client";

import { useEffect, useState } from "react";

import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  publishCourse,
  featureCourse,
} from "@/services/adminCourseApi";

import { Course } from "@/types/course";

export function useAdminCourses() {

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [pagination, setPagination] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  /**
   * Load Courses
   */
  async function loadCourses() {

    try {

      setLoading(true);

      setError("");

      const response =
        await getCourses(
          page,
          search
        );

      setCourses(response.data);

      setPagination(
        response.pagination
      );

    } catch (err: any) {

      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to load courses."
      );

    } finally {

      setLoading(false);

    }

  }

  /**
   * Create Course
   */
  async function createNewCourse(
    data: Partial<Course>
  ) {

    try {

      const {
    _id,
    createdBy,
    instructor,
    createdAt,
    updatedAt,
    enrollmentCount,
    ...payload
} = data;

await createCourse(payload);

      await loadCourses();

    } catch (err) {

      throw err;

    }

  }

  /**
   * Update Course
   */
  async function updateExistingCourse(
    id: string,
    data: Partial<Course>
  ) {

    try {

      await updateCourse(
        id,
        data
      );

      await loadCourses();

    } catch (err) {

      throw err;

    }

  }

  /**
   * Delete Course
   */
  async function deleteExistingCourse(
    id: string
  ) {

    try {

      await deleteCourse(id);

      await loadCourses();

    } catch (err) {

      throw err;

    }

  }


  // Feature Courses
  async function featureExistingCourse(
    id: string
) {
    await featureCourse(id);

    await loadCourses();

}


  /**
 * Publish Course
 */
async function publishExistingCourse(
  id: string
) {

  try {
    await publishCourse(id);
    await loadCourses();
  } catch (err) {
    throw err;
  }

}

  useEffect(() => {
    loadCourses();
  }, [page, search]);

  return {
    // Data
    courses,
    pagination,
    loading,
    error,

    // Pagination
    page,

    setPage,

    // Search
    search,

    setSearch,

    // Actions
    refresh: loadCourses,
    createCourse: createNewCourse,
    updateCourse: updateExistingCourse,
    featureCourse: featureExistingCourse,
    deleteCourse: deleteExistingCourse,
    publishCourse: publishExistingCourse,

  };

}