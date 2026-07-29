"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Plus } from "lucide-react";

import { useAdminLessons } from "@/hooks/useAdminLessons";

import LessonsGrid from "@/components/admin/lessons/LessonsGrid";
import LessonStatistics from "@/components/admin/lessons/LessonStatistics";

import CreateLessonModal from "@/components/admin/lessons/CreateLessonModal";
import EditLessonModal from "@/components/admin/lessons/EditLessonModal";
import DeleteLessonDialog from "@/components/admin/lessons/DeleteLessonDialog";

import { Lesson } from "@/types/lesson";

export default function LessonDashboardPage() {

  const params = useParams();

  const moduleId =
    params.moduleId as string;

  const {

    lessons,

    loading,

    createLesson,

    updateLesson,

    deleteLesson,

  } = useAdminLessons(moduleId);

  const [

    selectedLesson,

    setSelectedLesson,

  ] = useState<Lesson | null>(null);

  const [

    createOpen,

    setCreateOpen,

  ] = useState(false);

  const [

    editOpen,

    setEditOpen,

  ] = useState(false);

  const [

    deleteOpen,

    setDeleteOpen,

  ] = useState(false);

  if (loading) {

    return (

      <div className="p-10">

        Loading...

      </div>

    );

  }

  const published =
    lessons.filter(
      lesson => lesson.isPublished
    ).length;

  const preview =
    lessons.filter(
      lesson => lesson.isPreview
    ).length;

  const duration =
    lessons.reduce(
      (sum, lesson) =>
        sum + lesson.duration,
      0
    );

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">

            Lessons

          </h1>

          <p className="text-slate-500">

            Manage lessons inside this module.

          </p>

        </div>

        <button

          onClick={() =>
            setCreateOpen(true)
          }

          className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"

        >

          <Plus size={20} />

          New Lesson

        </button>

      </div>

      {/* Statistics */}

      <LessonStatistics

        total={lessons.length}

        published={published}

        preview={preview}

        duration={duration}

      />

      {/* Lessons */}

      <LessonsGrid

        lessons={lessons}

        onEdit={(lesson) => {

          setSelectedLesson(
            lesson
          );

          setEditOpen(true);

        }}

        onDelete={(lesson) => {

          setSelectedLesson(
            lesson
          );

          setDeleteOpen(true);

        }}

      />

      {/* Create */}

      <CreateLessonModal

        open={createOpen}

        moduleId={moduleId}

        onClose={() =>
          setCreateOpen(false)
        }

        createLesson={createLesson}

      />

      {/* Edit */}

      {selectedLesson && (

        <EditLessonModal

          open={editOpen}

          lesson={selectedLesson}

          onClose={() =>
            setEditOpen(false)
          }

          updateLesson={updateLesson}

        />

      )}

      {/* Delete */}

      {selectedLesson && (

        <DeleteLessonDialog

          open={deleteOpen}

          lessonId={
            selectedLesson._id
          }

          title={
            selectedLesson.title
          }

          onClose={() =>
            setDeleteOpen(false)
          }

          deleteLesson={deleteLesson}

        />

      )}

    </div>

  );

}