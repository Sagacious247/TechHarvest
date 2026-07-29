import { Student } from "@/types/dashboard";

interface Props {
  student: Student;
}

export default function ProfileCard({
  student,
}: Props) {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        My Profile
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Name:</strong>{" "}
          {student.fullName}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {student.email}
        </p>

        <p>
          <strong>Occupation:</strong>{" "}
          {student.occupation}
        </p>

        <p>
          <strong>Payment:</strong>{" "}
          <span className="text-green-600 font-semibold">
            {student.paymentStatus}
          </span>
        </p>

      </div>

    </div>

  );

}