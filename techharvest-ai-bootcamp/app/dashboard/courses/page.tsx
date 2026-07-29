"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import { getDashboard } from "@/lib/api";
import { DashboardData } from "@/types/dashboard";

export default function CoursesPage() {

  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const data = await getDashboard();

        setDashboard(data);

      } finally {

        setLoading(false);

      }

    };

    loadDashboard();

  }, []);

  if (loading) {

    return (

      <div className="flex justify-center py-20">

        Loading courses...

      </div>

    );

  }

  return (

    <div>

      <h1 className="text-4xl font-black mb-8">

        My Courses

      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {dashboard?.enrolledCourses.map((item) => (

          <div
            key={item._id}
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
          >

            <img
              src={
                item.course.thumbnail?.url ||
                "/course-placeholder.jpg"
              }
              alt={item.course.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">

                {item.course.title}

              </h2>

              <p className="mt-2 text-gray-500">

                {item.course.level}

              </p>

              <p className="mt-2 text-sm text-gray-500">

                {item.course.duration}

              </p>

              <div className="mt-6">

                <Link
                  href={`/dashboard/courses/${item.course._id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
                >

                  <BookOpen size={18} />

                  Continue Learning

                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}