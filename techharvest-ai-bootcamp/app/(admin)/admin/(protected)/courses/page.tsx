"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { useAdminCourses } from "@/hooks/useAdminCourses";
import { useAdmin } from "@/hooks/useAdmin";
import { useAdminAuth } from "@/hooks/useAdminAuth";

import CourseTable from "@/components/admin/courses/CourseTable";
import CreateCourseModal from "@/components/admin/courses/CreateCourseModal";
import CourseEditModal from "@/components/admin/courses/CourseEditModal";
import DeleteCourseDialog from "@/components/admin/courses/DeleteCourseDialog";
import CourseDetailsModal from "@/components/admin/courses/CourseDetailsModal";

import CoursesStats from "@/components/admin/courses/CoursesStats";
import CoursesToolbar from "@/components/admin/courses/CoursesToolbar";

import { Course } from "@/types/course";

export default function CoursesPage() {
  const [createOpen, setCreateOpen] =
    useState(false);
  const [editOpen, setEditOpen] =
    useState(false);
  const [deleteOpen, setDeleteOpen] =
    useState(false);
  const [detailsOpen, setDetailsOpen] =
    useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<Course | null>(null);

    const admin = useAdmin();

  const {
  courses,
  pagination,
  loading,
  error,
  search,
  setSearch,
  page,
  setPage,
  createCourse,
  updateCourse,
  deleteCourse,
  publishCourse,
  featureCourse
} = useAdminCourses();

  if (loading) {

    return (

      <div className="flex justify-center items-center h-[60vh]">

        <p className="text-lg text-gray-500">

          Loading courses...

        </p>

      </div>

    );

  }

  if (error) {

    return (

      <div className="rounded-xl border border-red-200 bg-red-50 p-6">

        <h2 className="text-red-700 font-semibold">

          Something went wrong

        </h2>

        <p className="text-red-500 mt-2">

          {error}

        </p>

      </div>

    );

  }

  return (

    <div className="mx-auto w-full max-w-[1700px] space-y-8 px-2 sm:px-4 lg:px-6">

      {/* ===========================
          Header
      =========================== */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

  <div>

    <h1 className="text-4xl font-bold tracking-tight text-slate-900">

      Courses

    </h1>

    <p className="mt-2 text-lg text-slate-500">

      Manage all TechHarvest courses from one place.

    </p>

  </div>

  <button
    onClick={() => setCreateOpen(true)}
    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 font-semibold text-white shadow-sm transition hover:bg-green-700"
  >
    <Plus size={20} />

    New Course

  </button>

</div>

      {/* ===========================
          Statistics
      =========================== */}

      <CoursesStats
  total={courses.length}
  published={
    courses.filter(
      (course) => course.status === "Published"
    ).length
  }
  draft={
    courses.filter(
      (course) => course.status === "Draft"
    ).length
  }
  featured={
    courses.filter(
      (course) => course.isFeatured
    ).length
  }
/>
      {/* ===========================
          Search
      =========================== */}

      <CoursesToolbar
  search={search}
  setSearch={setSearch}
/>


      {/* ===========================
          Courses Table
      =========================== */}

<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

    <CourseTable
        courses={courses}
        currentAdminId={admin?._id || ""}
        currentRole={admin?.role || ""}
        onView={(course) => {
            setSelectedCourse(course);
            setDetailsOpen(true);
        }}
        onEdit={(course) => {
            setSelectedCourse(course);
            setEditOpen(true);
        }}
        onDelete={(course) => {
            setSelectedCourse(course);
            setDeleteOpen(true);
        }}
        onPublish={async (course) => {
            try {
                await publishCourse(course._id);
                alert("Course published successfully.");
            } catch (error: any) {
                alert(
                    error?.response?.data?.message ||
                    "Failed to publish course."
                );
            }
        }}
        onFeature={async (course) => {
            try {
                await featureCourse(course._id);
                alert("Course featured successfully.");
            } catch (error: any) {
                alert(
                    error?.response?.data?.message ||
                    "Failed to feature course."
                );
            }
        }}
    />

</div>

      {/* ===========================
          Pagination
      =========================== */}

      {

        pagination && (

          <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">

            <button

              disabled={!pagination.hasPrevious}

              onClick={() => setPage(page - 1)}

              className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"

            >

              Previous

            </button>

            <p className="font-semibold">

              Page

              <span className="mx-2 text-green-600">

                {pagination.page}

              </span>

              of

              <span className="mx-2">

                {pagination.totalPages}

              </span>

            </p>

            <button

              disabled={!pagination.hasNext}

              onClick={() => setPage(page + 1)}

              className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"

            >

              Next

            </button>

          </div>

        )

      }

      {/* ===========================
          Modals
      =========================== */}

      <CreateCourseModal

        open={createOpen}

        onClose={() => setCreateOpen(false)}

        createCourse={createCourse}

      />

      {

        selectedCourse && (

          <>

            <CourseEditModal

              open={editOpen}

              course={selectedCourse}

              onClose={() => setEditOpen(false)}

              updateCourse={updateCourse}

            />

            <DeleteCourseDialog

              open={deleteOpen}

              course={selectedCourse}

              onClose={() => setDeleteOpen(false)}

              deleteCourse={deleteCourse}

            />

            <CourseDetailsModal

              open={detailsOpen}

              course={selectedCourse}

              onClose={() => setDetailsOpen(false)}

            />

          </>

        )

      }

    </div>

  );

}