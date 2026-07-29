"use client";

import { useLearning } from "@/hooks/useLearning";

export default function LearningSidebar() {

  const {

    course,

    selectedLesson,

    setSelectedLesson,

  } = useLearning();

  if (!course) return null;

  return (

    <aside className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-4">

        Course Content

      </h2>

      {course.modules.map((module) => (

        <div

          key={module._id}

          className="mb-6"

        >

          <h3 className="font-semibold mb-2">

            {module.title}

          </h3>

          <div className="space-y-2">

            {module.lessons.map((lesson) => (

              <button

                key={lesson._id}

                onClick={() =>

                  setSelectedLesson(lesson)

                }

                className={`

                  w-full

                  text-left

                  rounded-lg

                  border

                  p-3

                  transition

                  ${

                    selectedLesson?._id === lesson._id

                      ? "bg-green-600 text-white border-green-600"

                      : "hover:bg-green-50"

                  }

                `}

              >

                <div className="font-medium">

                  {lesson.title}

                </div>

                {lesson.progress?.completed && (

                  <div className="text-sm mt-1">

                    ✅ Completed

                  </div>

                )}

              </button>

            ))}

          </div>

        </div>

      ))}

    </aside>

  );

}