import { Enrollment } from "@/types/dashboard";

interface Props {
  courses: Enrollment[];
}

export default function CoursesCard({
  courses,
}: Props) {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        My Courses
      </h2>

      <div className="space-y-4">

        {courses.map((item) => (

          <div
            key={item._id}
            className="border rounded-xl p-4"
          >

            <h3 className="font-semibold">

              {item.course.title}

            </h3>

          </div>

        ))}

      </div>

    </div>

  );

}