"use client";

import Link from "next/link";

import type { ResumeLearningData } from "@/types/dashboard";

interface Props {
  lesson: ResumeLearningData | null;
}

export default function ResumeLearning({
  lesson,
}: Props) {

  if (!lesson) {

    return (

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold">
          Continue Learning
        </h2>

        <p className="mt-4 text-gray-500">
          No lesson available.
        </p>

      </div>

    );

  }

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Continue Learning
      </h2>

      <h3 className="text-2xl font-bold text-slate-800">

        {lesson.enrollment.course.title}

      </h3>

      <p className="text-gray-500 mt-2">

        {lesson.module.title}

      </p>

      <p className="font-semibold mt-5 text-lg">

        {lesson.lesson.title}

      </p>

      <div className="mt-8">

        <Link
          href={`/learn/${lesson.enrollment.course._id}`}
          className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 transition text-white font-semibold px-8 py-3 rounded-xl"
        >
          Resume Learning
        </Link>

      </div>

    </div>

  );

}