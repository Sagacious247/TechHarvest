"use client";

import { use } from "react";

import { LearningProvider } from "@/contexts/LearningContext";

import LearningSidebar from "@/components/learning/LearningSidebar";
import LessonViewer from "@/components/learning/LessonViewer";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function CoursePage({
  params,
}: Props) {

  const { id } = use(params);

  return (

    <LearningProvider courseId={id}>

      <main className="min-h-screen bg-slate-100">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 p-8">

          <LearningSidebar />

          <div className="lg:col-span-3">

            <LessonViewer />

          </div>

        </div>

      </main>

    </LearningProvider>

  );

}