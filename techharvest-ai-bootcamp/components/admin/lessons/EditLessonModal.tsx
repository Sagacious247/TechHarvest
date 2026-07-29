"use client";

import { useEffect, useState } from "react";

import LessonForm from "./LessonForm";

import { Lesson } from "@/types/lesson";

interface EditLessonModalProps {
  open: boolean;
  lesson: Lesson;
  onClose: () => void;
  updateLesson: (
    id: string,
    data: Partial<Lesson>
  ) => Promise<void>;
}

export default function EditLessonModal({

  open,

  lesson,

  onClose,

  updateLesson,

}: EditLessonModalProps) {

  const [form, setForm] =
    useState<Lesson>(lesson);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    setForm(lesson);

  }, [lesson]);

  if (!open) return null;

  async function handleSubmit() {

    try {

      setLoading(true);

      await updateLesson(
        form._id,
        form
      );

      alert("Lesson updated successfully.");

      onClose();

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl">

        <div className="border-b px-8 py-6">

          <h2 className="text-2xl font-bold">

            Edit Lesson

          </h2>

        </div>

        <div className="max-h-[75vh] overflow-y-auto p-8">

          <LessonForm

            lesson={form}

            onChange={setForm}

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
            Save Changes
          </button>

        </div>

      </div>

    </div>

  );

}