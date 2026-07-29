"use client";

import { Student } from "@/types/student";
import StudentActions from "./StudentActions";

interface Props {
    students: Student[];
    onView: (student: Student) => void;
    onEdit: (student: Student) => void;
    onDelete:(student:Student)=>void;
}

export default function StudentTable({
  students,
  onView,
  onEdit,
  onDelete
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow border">

      <table className="min-w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Student
            </th>

            <th className="px-6 py-4 text-left">
              Phone
            </th>

            <th className="px-6 py-4 text-left">
              Occupation
            </th>

            <th className="px-6 py-4 text-left">
              Payment
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-right">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student._id}
              className="border-t hover:bg-slate-50"
            >

              <td className="px-6 py-4">

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">

                    {student.fullName.charAt(0)}

                  </div>

                  <div>

                    <p className="font-semibold">

                      {student.fullName}

                    </p>

                    <p className="text-sm text-gray-500">

                      {student.email}

                    </p>

                  </div>

                </div>

              </td>

              <td className="px-6 py-4">

                {student.phone}

              </td>

              <td className="px-6 py-4">

                {student.occupation}

              </td>

              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    student.paymentStatus === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >

                  {student.paymentStatus}

                </span>

              </td>

              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    student.status === "active"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >

                  {student.status}

                </span>

              </td>

              <td className="px-6 py-4 text-right">

<StudentActions
    onView={() => onView(student)}
    onEdit={() => onEdit(student)}
    onDelete={() => onDelete(student)}
/>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}