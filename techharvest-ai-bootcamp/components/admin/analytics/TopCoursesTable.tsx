"use client";

interface TopCourse {
  title: string;
  students: number;
  revenue: number;
}

interface Props {
  courses: TopCourse[];
}

export default function TopCoursesTable({
  courses,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Top Performing Courses
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b bg-slate-50">
            <tr>
              <th className="p-4 text-left">
                Course
              </th>

              <th className="p-4 text-center">
                Students
              </th>

              <th className="p-4 text-right">
                Revenue
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="p-8 text-center text-slate-500"
                >
                  No course analytics available.
                </td>
              </tr>
            ) : (
              courses.map((course, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none"
                >
                  <td className="p-4 font-medium">
                    {course.title}
                  </td>

                  <td className="p-4 text-center">
                    {course.students}
                  </td>

                  <td className="p-4 text-right font-semibold text-green-600">
                    ₦{course.revenue.toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}