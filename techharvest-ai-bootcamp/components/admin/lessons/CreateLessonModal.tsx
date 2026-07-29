"use client";

import { useState } from "react";

import LessonForm from "./LessonForm";

import { Lesson } from "@/types/lesson";

interface CreateLessonModalProps {
  open: boolean;
  moduleId: string;
  onClose: () => void;
  createLesson: (data: any) => Promise<void>;
}

const emptyLesson: Lesson = {
  _id: "",

  title: "",

  description: "",

  video: {
    url: "",
    publicId: "",
  },

  notes: "",

  resources: [],

  duration: 0,

  order: 1,

  isPreview: false,

  isPublished: false,

  module: "",

  createdAt: "",

  updatedAt: "",
};

export default function CreateLessonModal({
  open,
  moduleId,
  onClose,
  createLesson,
}: CreateLessonModalProps) {

  const [lesson, setLesson] =
    useState<Lesson>({
      ...emptyLesson,
      module: moduleId,
    });

  const [loading, setLoading] =
    useState(false);

  if (!open) return null;

  async function handleSubmit() {

    try {

      setLoading(true);

      // await createLesson({
      //   ...lesson,
      //   module: moduleId,
      // });

      await createLesson({
  title: lesson.title,
  description: lesson.description,
  video: lesson.video,
  notes: lesson.notes,
  resources: lesson.resources,
  duration: lesson.duration,
  order: lesson.order,
  isPreview: lesson.isPreview,
  module: moduleId,
});

      setLesson({
        ...emptyLesson,
        module: moduleId,
      });

      alert("Lesson created successfully.");

      onClose();

    } catch (error) {

      console.error(error);

      alert("Failed to create lesson.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl">

        <div className="border-b px-8 py-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">

              Create Lesson

            </h2>

            <p className="text-slate-500">

              Add a new lesson.

            </p>

          </div>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        <div className="max-h-[75vh] overflow-y-auto p-8">

          <LessonForm

            lesson={lesson}

            onChange={setLesson}

          />

        </div>

        <div className="flex justify-end gap-4 border-t px-8 py-6">

          <button

            onClick={onClose}

            className="rounded-lg border px-6 py-3"

          >

            Cancel

          </button>

          <button

            onClick={handleSubmit}

            disabled={loading}

            className="rounded-lg bg-green-600 px-6 py-3 text-white"

          >

            {

              loading

                ? "Creating..."

                : "Create Lesson"

            }

          </button>

        </div>

      </div>

    </div>

  );

}