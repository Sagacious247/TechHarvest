"use client";

import { Trash2 } from "lucide-react";

import Modal from "@/components/common/Modal";

import { Course } from "@/types/course";

interface Props {
  open: boolean;
  course: Course | null;
  onClose: () => void;
  deleteCourse: (
    id: string
  ) => Promise<void>;
}

export default function DeleteCourseDialog({
  open,
  course,
  onClose,
  deleteCourse,
}: Props) {

  if (!course) return null;

  async function handleDelete() {
    if (!course) return;
    try {
        await deleteCourse(course._id);
        onClose();
    } catch (error) {
        console.error(error);
        alert("Failed to delete course.");
    }

}

  return (

    <Modal
      open={open}
      onClose={onClose}
      title="Delete Course"
      width="max-w-lg"
    >

      <div className="space-y-6">

        <div className="flex items-center gap-4">

          <div className="bg-red-100 rounded-full p-4">

            <Trash2
              size={28}
              className="text-red-600"
            />

          </div>

          <div>

            <h3 className="text-xl font-bold">

              Delete this course?

            </h3>

            <p className="text-gray-500">

              This action cannot be undone.

            </p>

          </div>

        </div>

        <div className="rounded-xl border p-4 bg-gray-50">

          <p className="font-semibold">

            {course.title}

          </p>

          <p className="text-gray-500 text-sm mt-2">

            {course.category}

          </p>

        </div>

        <div className="flex justify-end gap-4">

          <button

            onClick={onClose}

            className="border px-6 py-3 rounded-lg"

          >

            Cancel

          </button>

          <button

            onClick={handleDelete}

            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"

          >

            Delete Course

          </button>

        </div>

      </div>

    </Modal>

  );

}