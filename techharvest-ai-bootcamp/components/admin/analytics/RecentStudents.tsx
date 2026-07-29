"use client";

interface Props {
  students: any[];
}

export default function RecentStudents({
  students,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">

      <div className="border-b p-6">

        <h2 className="text-xl font-bold">
          Recent Students
        </h2>

        <p className="text-sm text-slate-500">
          Newly registered students.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">
                Student
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-right">
                Joined
              </th>

            </tr>

          </thead>

          <tbody>

            {students.length === 0 ? (

              <tr>

                <td
                  colSpan={3}
                  className="p-8 text-center text-slate-500"
                >
                  No students found.
                </td>

              </tr>

            ) : (

              students.map((student) => (

                <tr
                  key={student._id}
                  className="border-t"
                >

                  <td className="p-4 font-semibold">
                    {student.fullName}
                  </td>

                  <td className="p-4">
                    {student.email}
                  </td>

                  <td className="p-4 text-right">
                    {new Date(
                      student.createdAt
                    ).toLocaleDateString()}
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