"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  BookOpen,
  CheckCircle,
  Layers,
  Clock3,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import FadeIn from "../FadeIn";
import { getFeaturedCourse } from "@/services/landing.service";
import { CourseDetails } from "@/types/course";

export default function Curriculum() {
  const [course, setCourse] =
    useState<CourseDetails | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadCourse() {
      try {
        const data = await getFeaturedCourse();
        setCourse(data);
      } finally {
        setLoading(false);
      }
    }

    loadCourse();
  }, []);

  if (loading) {
    return (
      <section
        id="bootcamp"
        className="bg-slate-950 py-16 md:py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Loading Curriculum...
          </h2>

        </div>
      </section>
    );
  }

  if (!course) return null;

  return (
    <FadeIn>

      <section className="bg-slate-950 py-16 md:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* Header */}

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-block uppercase tracking-[0.2em] md:tracking-[0.3em] text-green-400 font-bold text-xs sm:text-sm">
              Featured Course
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              {course.course.title}
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-400">
              {course.course.shortDescription}
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 mt-14 sm:mt-16 lg:mt-20">

            {/* Curriculum */}

            <div className="lg:col-span-2 space-y-5 sm:space-y-6">

              {course.curriculum.map((module, index) => (

                <div
                  key={module._id}
                  className="
                    rounded-2xl
                    sm:rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-5
                    sm:p-7
                    lg:p-8
                    transition
                    hover:border-green-500
                  "
                >

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5">

                    <div className="flex-1">

                      <p className="text-sm sm:text-base text-green-400 font-semibold">
                        Module {index + 1}
                      </p>

                      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                        {module.title}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base leading-7 text-slate-400">
                        {module.description}
                      </p>

                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">

                      <BookOpen size={18} />

                      {module.totalLessons} Lesson
                      {module.totalLessons !== 1 && "s"}

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Course Overview */}

            <div>

              <div className="lg:sticky lg:top-28 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Course Overview
                </h3>

                <div className="mt-8 space-y-5">

                  <InfoRow
                    icon={<Layers size={20} className="text-green-400" />}
                    text={`${course.totalModules} Modules`}
                  />

                  <InfoRow
                    icon={<BookOpen size={20} className="text-green-400" />}
                    text={`${course.totalLessons} Lessons`}
                  />

                  <InfoRow
                    icon={<Clock3 size={20} className="text-green-400" />}
                    text={course.course.duration}
                  />

                  <InfoRow
                    icon={<GraduationCap size={20} className="text-green-400" />}
                    text={course.course.level}
                  />

                  <InfoRow
                    icon={<CheckCircle size={20} className="text-green-400" />}
                    text="Lifetime Access"
                  />

                  <InfoRow
                    icon={<CheckCircle size={20} className="text-green-400" />}
                    text="Certificate of Completion"
                  />

                </div>

                <div className="mt-10">

                  <p className="text-sm uppercase tracking-wide text-slate-500">
                    Course Fee
                  </p>

                  <h2 className="mt-2 text-4xl sm:text-5xl font-black text-green-400">
                    ₦{course.course.price.toLocaleString()}
                  </h2>

                </div>

                <Link
                  href={`/courses/${course.course._id}`}
                  className="
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-green-500
                    py-4
                    sm:py-5
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                    transition
                    hover:bg-green-600
                  "
                >

                  View Course

                  <ArrowRight size={20} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </FadeIn>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      {icon}

      <span className="text-sm sm:text-base text-slate-300">
        {text}
      </span>

    </div>
  );
}
