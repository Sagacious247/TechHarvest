"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Clock3,
  BookOpen,
  Star,
  ArrowRight,
} from "lucide-react";

import { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({
  course,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_25px_70px_rgba(34,197,94,.18)]">

      {/* Thumbnail */}

      <div className="relative overflow-hidden">

        <Image
          src={course.thumbnail.url}
          alt={course.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="absolute left-5 top-5">

          <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">

            {course.level}

          </span>

        </div>

        {course.isFeatured && (

          <div className="absolute right-5 top-5">

            <span className="flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-2 text-xs font-bold text-slate-900">

              <Star size={14} fill="currentColor" />

              Featured

            </span>

          </div>

        )}

      </div>

      {/* Content */}

      <div className="p-7">

        <h2 className="line-clamp-2 text-2xl font-black text-white">

          {course.title}

        </h2>

        <p className="mt-5 line-clamp-3 leading-7 text-slate-400">

          {course.shortDescription || course.description}

        </p>

        {/* Stats */}

        <div className="mt-8 flex items-center justify-between">

          <div className="flex items-center gap-2 text-slate-400">

            <Clock3 size={18} />

            <span>{course.duration}</span>

          </div>

          <div className="flex items-center gap-2 text-slate-400">

            <BookOpen size={18} />

            <span>

              {course.moduleCount ?? 0} Modules

            </span>

          </div>

        </div>

        {/* Price */}

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">

              Price

            </p>

            <h3 className="text-3xl font-black text-green-400">

              ₦{course.price.toLocaleString()}

            </h3>

          </div>

        </div>

        {/* CTA */}

        <Link
          href={`/courses/${course._id}`}
          className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-600"
        >

          View Course

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}