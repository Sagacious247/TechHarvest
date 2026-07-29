"use client";

interface DeleteLessonDialogProps {

  open: boolean;

  lessonId: string;

  title: string;

  onClose: () => void;

  deleteLesson: (
    id: string
  ) => Promise<void>;

}

export default function DeleteLessonDialog({

  open,

  lessonId,

  title,

  onClose,

  deleteLesson,

}: DeleteLessonDialogProps) {

  if (!open) return null;

  async function handleDelete() {

    await deleteLesson(
      lessonId
    );

    onClose();

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-8">

        <h2 className="text-xl font-bold">

          Delete Lesson

        </h2>

        <p className="mt-3 text-slate-600">

          Are you sure you want to delete

          <strong> {title}</strong>?

        </p>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-600 px-5 py-2 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}