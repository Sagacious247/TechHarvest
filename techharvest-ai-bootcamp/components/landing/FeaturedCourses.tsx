"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import CourseCard from "@/components/courses/CourseCard";
import { getCourses } from "@/services/course.service";
import { Course } from "@/types/course";

export default function FeaturedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await getCourses();

        const featured = data
          .filter((course) => course.isFeatured)
          .slice(0, 3);

        setCourses(featured);
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-950 py-24" id="courses">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          Loading featured courses...
        </div>
      </section>
    );
  }

  if (!courses.length) return null;

  return (
<section className="bg-slate-950 py-16 sm:py-20 lg:py-28" id="courses">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>

            <span className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">

              Featured Courses

            </span>

            <h2 className="mt-3 sm:mt-4 text-4xl sm:text-5xl lg:text-5xl font-black leading-tight text-white">

              Start Learning Today

            </h2>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">

              Carefully designed practical courses to help you master
              Artificial Intelligence, Digital Skills and Online Income.

            </p>

          </div>

          <Link
            href="/courses"
            className="mt-2 lg:mt-0 inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-xl border border-green-500 px-6 py-3 text-sm sm:text-base text-green-400 hover:bg-green-500 hover:text-white transition"
          >
            View All Courses

            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}

        </div>

      </div>

    </section>
  );
}