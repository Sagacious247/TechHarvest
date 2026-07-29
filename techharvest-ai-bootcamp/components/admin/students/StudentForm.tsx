"use client";

import { Student } from "@/types/student";

interface Props {
  student: Student;
  onChange: (student: Student) => void;
}

export default function StudentForm({
  student,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-6">

        <Input
          label="Full Name"
          value={student.fullName}
          onChange={(value) =>
            onChange({
              ...student,
              fullName: value,
            })
          }
        />

        <Input
          label="Email"
          value={student.email}
          onChange={(value) =>
            onChange({
              ...student,
              email: value,
            })
          }
        />

        <Input
          label="Phone"
          value={student.phone}
          onChange={(value) =>
            onChange({
              ...student,
              phone: value,
            })
          }
        />

        <Input
          label="Occupation"
          value={student.occupation}
          onChange={(value) =>
            onChange({
              ...student,
              occupation: value,
            })
          }
        />

        <Input
          label="Experience"
          value={student.experience}
          onChange={(value) =>
            onChange({
              ...student,
              experience: value,
            })
          }
        />

        <div>

          <label className="block mb-2 font-medium">

            Account Status

          </label>

          <select
            value={student.status}
            onChange={(e) =>
              onChange({
                ...student,
                status: e.target.value as "active" | "inactive",
              })
            }
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

        </div>

        <div>

          <label className="block mb-2 font-medium">

            Payment Status

          </label>

          <select
            value={student.paymentStatus}
            onChange={(e) =>
              onChange({
                ...student,
                paymentStatus: e.target.value as "pending" | "paid",
              })
            }
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>

        </div>

      </div>

    </div>
  );
}

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function Input({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div>

      <label className="block mb-2 font-medium">

        {label}

      </label>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full border rounded-lg px-4 py-3"
      />

    </div>
  );
}