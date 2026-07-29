"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import ResumeLearning from "@/components/dashboard/ResumeLearning";
import CoursesCard from "@/components/dashboard/CoursesCard";
import ProfileCard from "@/components/dashboard/ProfileCard";

import { useDashboard } from "@/hooks/useDashboard";

export default function DashboardPage() {

  const {
    dashboard,
    loading,
    error,
  } = useDashboard();

  if (loading) {

    return (

      <main className="min-h-screen bg-slate-100 flex items-center justify-center">

        <h1 className="text-2xl font-bold">
          Loading Dashboard...
        </h1>

      </main>

    );

  }

  if (error || !dashboard) {

    return (

      <main className="min-h-screen bg-slate-100 flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-red-600">
            Failed to Load Dashboard
          </h1>

          <p className="text-gray-600 mt-4">
            {error}
          </p>

        </div>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <DashboardHeader
          fullName={
            dashboard.student.fullName
          }
        />

        <div className="mt-8">

          <StatsCards
            stats={dashboard.stats}
          />

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          <div className="lg:col-span-2 space-y-8">

            <ResumeLearning
              lesson={
                dashboard.resumeLearning
              }
            />

            <CoursesCard
              courses={
                dashboard.enrolledCourses
              }
            />

          </div>

          <div>

            <ProfileCard
              student={
                dashboard.student
              }
            />

          </div>

        </div>

      </div>

    </main>

  );

}