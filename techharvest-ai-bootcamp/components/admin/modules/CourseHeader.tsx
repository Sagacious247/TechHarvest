interface Props {

  course: any;

}

export default function
CourseHeader({

  course,

}: Props) {

  return (

    <div className="rounded-xl border bg-white p-6">

      <div className="flex gap-6">

        <img

          src={course.thumbnail.url}

          alt={course.title}

          className="w-40 h-24 rounded-lg object-cover"

        />

        <div>

          <h1 className="text-3xl font-bold">

            {course.title}

          </h1>

          <p className="text-gray-500 mt-2">

            {course.level}

          </p>

          <p className="text-green-600 font-bold mt-2">

            ₦{course.price.toLocaleString()}

          </p>

        </div>

      </div>

    </div>

  );

}