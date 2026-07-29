"use client";

import LessonCard from "./LessonCard";

import { Lesson } from "@/types/lesson";

interface LessonsGridProps {
  lessons: Lesson[];
  onEdit: (lesson: Lesson) => void;
  onDelete: (lesson: Lesson) => void;
}

export default function LessonsGrid({
  lessons,
  onEdit,
  onDelete,
}: LessonsGridProps) {

  if (lessons.length === 0) {

    return (

      <div className="rounded-2xl border border-dashed py-20 text-center">

        <h2 className="text-xl font-bold">

          No Lessons Yet

        </h2>

        <p className="mt-3 text-slate-500">

          Create your first lesson.

        </p>

      </div>

    );

  }

  return (

    <div className="grid gap-6">

      {lessons.map((lesson) => (

        <LessonCard

          key={lesson._id}

          lesson={lesson}

          onEdit={onEdit}

          onDelete={onDelete}

        />

      ))}

    </div>

  );

}