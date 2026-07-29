"use client";

import { useEffect, useState } from "react";

import { Student, Pagination } from "@/types/student";

import { getStudents } from "@/services/adminStudent.service";

export function useStudents() {

  const [students, setStudents] =
    useState<Student[]>([]);

  const [pagination, setPagination] =
    useState<Pagination | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [search, setSearch] =
    useState("");

  const fetchStudents = async () => {

    try {
      setLoading(true);
      const response =
        await getStudents({
          page,
          limit: 10,
          search,
        });
      setStudents(response.data);
      setPagination(response.pagination);
      setError("");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        "Unable to load students."
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchStudents();
  }, [page, search]);

  return {
    students,
    pagination,
    loading,
    error,
    page,
    setPage,
    search,
    setSearch,
    fetchStudents,
    // refresh: fetchStudents,
  };
}