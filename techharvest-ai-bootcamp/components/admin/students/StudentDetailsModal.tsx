"use client";

import Modal from "@/components/common/Modal";
import { Student } from "@/types/student";

interface Props {
  student: Student | null;
  open: boolean;
  onClose: () => void;
}

export default function StudentDetailsModal({
  student,
  open,
  onClose,
}: Props) {

  if (!student) return null;

  return (

    <Modal
      open={open}
      title="Student Profile"
      onClose={onClose}
    >

      <div className="flex items-center gap-6 mb-8">

        <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold">

          {student.fullName.charAt(0)}

        </div>

        <div>

          <h3 className="text-2xl font-bold">

            {student.fullName}

          </h3>

          <p className="text-gray-500">

            {student.email}

          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <InfoCard
          title="Phone"
          value={student.phone}
        />

        <InfoCard
          title="Occupation"
          value={student.occupation}
        />

        <InfoCard
          title="Experience"
          value={student.experience}
        />

        <InfoCard
          title="Payment Status"
          value={student.paymentStatus}
        />

        <InfoCard
          title="Account Status"
          value={student.status}
        />

        <InfoCard
          title="Student ID"
          value={student._id}
        />

      </div>

    </Modal>

  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div className="border rounded-xl p-4">

      <p className="text-gray-500 text-sm">

        {title}

      </p>

      <p className="font-semibold mt-2">

        {value || "-"}

      </p>

    </div>

  );

}