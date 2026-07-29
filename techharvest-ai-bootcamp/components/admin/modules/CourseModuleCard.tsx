"use client";

import Image from "next/image";
import Link from "next/link";

import {
  BookOpen,
  FolderOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseModuleCard({
  course,
}: Props) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
    "
    >
      {/* Thumbnail */}

      <div className="relative h-52 w-full overflow-hidden">

        <Image
          src={
            course.thumbnail?.url ||
            "/images/course-placeholder.png"
          }
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4">

          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">

            {course.level}

          </span>

        </div>

        <div className="absolute top-4 right-4">

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              course.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {course.status}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        <div>

          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">

            {course.category}

          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900 line-clamp-2">

            {course.title}

          </h2>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <FolderOpen
              className="mx-auto text-indigo-600"
              size={20}
            />

            <p className="mt-2 text-lg font-bold">

              {course.moduleCount ?? 0}

            </p>

            <p className="text-xs text-slate-500">

              Modules

            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <BookOpen
              className="mx-auto text-cyan-600"
              size={20}
            />

            <p className="mt-2 text-lg font-bold">

              {course.lessonCount ?? 0}

            </p>

            <p className="text-xs text-slate-500">

              Lessons

            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <CheckCircle2
              className="mx-auto text-green-600"
              size={20}
            />

            <p className="mt-2 text-lg font-bold">

              {course.publishedModuleCount ?? 0}

            </p>

            <p className="text-xs text-slate-500">

              Published

            </p>

          </div>

        </div>

        {/* Footer */}

        <Link
          href={`/admin/modules/${course._id}`}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            py-3
            font-semibold
            text-white
            transition
            hover:bg-green-700
          "
        >
          Manage Modules

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}