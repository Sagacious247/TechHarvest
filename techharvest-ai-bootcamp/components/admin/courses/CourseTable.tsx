"use client";

import { Course } from "@/types/course";
import CourseActions from "./CourseActions";

interface Props {
  courses: Course[];
  currentAdminId: string;
  currentRole: string;
  onView: (course: Course) => void;
  onEdit: (course: Course) => void;
  onDelete: (course: Course) => void;
  onPublish: (course: Course) => void;
  onFeature?: (course: Course) => void;
}

export default function CourseTable({
  courses,
  currentAdminId,
  currentRole,
  onView,
  onEdit,
  onDelete,
  onPublish,
  onFeature,
}: Props) {
  
  return (

    <div className="rounded-2xl bg-white shadow border overflow-x-auto">

      <table className="min-w-[1200px] w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Course TESTING
            </th>

            <th className="px-6 py-4 text-left">
              Price
            </th>

            <th className="px-6 py-4 text-left">
              Level
            </th>

            <th className="px-6 py-4 text-left">
              Duration
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Featured
            </th>

            <th className="px-6 py-4 text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {courses.map((course) => (

            <tr
              key={course._id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4">

                <div className="flex items-center gap-4">

        <img
  src={
    course.thumbnail?.url ||
    "/images/course-placeholder.png"
  }
  alt={course.title}
  className="h-20 w-32 rounded-lg object-cover border border-slate-200 flex-shrink-0"
/>
                  {/* <div>

                    <p className="font-semibold">

                      {course.title}

                    </p>

                    <p className="text-sm text-gray-500">

                      {course.category}

                    </p>

                  </div> */}

                  <div className="min-w-0">

  <h3 className="font-semibold text-slate-900 line-clamp-2">

    {course.title}

  </h3>

  <p className="text-sm text-slate-500 mt-1">

    {course.category}

  </p>

</div>

                </div>

              </td>

             <td className="px-6 py-5 w-[380px]">

                ₦{course.price.toLocaleString()}

              </td>

              <td className="px-6 py-4">

                {course.level}

              </td>

              <td className="px-6 py-4">

                {course.duration}

              </td>

              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : course.status === "Draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >

                  {course.status}

                </span>

              </td>

              <td className="px-6 py-4">

                {course.isFeatured ? (

                  <span className="text-green-600 font-semibold">

                    Yes

                  </span>

                ) : (

                  <span className="text-gray-500">

                    No

                  </span>

                )}

              </td>

              <td className="px-6 py-4 text-right">

                <CourseActions
                  course={course}
                  currentAdminId={currentAdminId}
                  currentRole={currentRole}
                  onView={() => onView(course)}
                  onEdit={() => onEdit(course)}
                  onDelete={() => onDelete(course)}
                  onPublish={() => onPublish(course)}
                  onFeature={() => onFeature?.(course)}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

