"use client";

import { useParams } from "next/navigation";

import {
  LearningProvider,
  useLearning,
} from "@/contexts/LearningContext";

import LearningSidebar from "@/components/learning/LearningSidebar";
import LessonViewer from "@/components/learning/LessonViewer";

function LearningContent() {

  const {

    course,

    loading,

  } = useLearning();

  if (loading) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-2xl font-bold">

          Loading Course...

        </h1>

      </main>

    );

  }

  if (!course) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-red-600 text-2xl">

          Course not found.

        </h1>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 p-8">

        <LearningSidebar />

        <div className="lg:col-span-3">

          <LessonViewer />

        </div>

      </div>

    </main>

  );

}

export default function LearningPage() {

  const params = useParams();

  const courseId = params.courseId as string;

  return (

    <LearningProvider courseId={courseId}>

      <LearningContent />

    </LearningProvider>

  );

}