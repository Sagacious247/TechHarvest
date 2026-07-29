// export default function ModulesPage() {
//   return (
//     <div className="space-y-6">

//       <div>

//         <h1 className="text-3xl font-bold">
//           Module Management
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Manage all course modules.
//         </p>

//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { useAdminCourses } from "@/hooks/useAdminCourses";

import CourseModuleCard from "@/components/admin/modules/CourseModuleCard";
import CoursesStats from "@/components/admin/courses/CoursesStats";

export default function ModulesPage() {
  const {
    courses,
    loading,
    error,
  } = useAdminCourses();

  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="text-lg text-slate-500">
          Loading Courses...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h2 className="font-semibold text-red-700">
          Failed to load courses
        </h2>

        <p className="mt-2 text-red-500">
          {error}
        </p>
      </div>
    );
  }

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10">

      {/* Header */}

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">

            Module Management

          </h1>

          <p className="mt-2 text-slate-500">

            Select a course to manage its modules and lessons.

          </p>

        </div>

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search course..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              py-3
              pl-11
              pr-4
              outline-none
              transition
              focus:border-green-500
              focus:ring-4
              focus:ring-green-100
            "
          />

        </div>

      </div>

      {/* Statistics */}

      <CoursesStats
        total={courses.length}
        published={
          courses.filter(
            (c) => c.status === "Published"
          ).length
        }
        draft={
          courses.filter(
            (c) => c.status === "Draft"
          ).length
        }
        featured={
          courses.filter(
            (c) => c.isFeatured
          ).length
        }
      />

      {/* Course Cards */}

      {filteredCourses.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-24 text-center">

          <h2 className="text-2xl font-bold text-slate-700">

            No Courses Found

          </h2>

          <p className="mt-2 text-slate-500">

            Create a course before managing modules.

          </p>

        </div>

      ) : (

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredCourses.map((course) => (

            <CourseModuleCard
              key={course._id}
              course={course}
            />

          ))}

        </div>

      )}

    </div>
  );
}