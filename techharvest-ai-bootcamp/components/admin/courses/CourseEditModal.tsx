"use client";

import { useEffect, useState } from "react";
import CourseForm from "./CourseForm";

import { Course } from "@/types/course";

import Modal from "@/components/common/Modal";

interface Props {
  open: boolean;
  course: Course | null;
  onClose: () => void;
  updateCourse: (
    id: string,
    data: Partial<Course>
  ) => Promise<void>;
}

export default function CourseEditModal({
  open,
  course,
  onClose,
  updateCourse,
}: Props) {

    const [formData, setFormData] =
    useState<Course>(
        {} as Course
    );

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (course) {
    setFormData({
        ...course,
    });
}


  }, [course]);

  if (!formData) return null;

  async function handleUpdate() {
    if (!course) return;
    try {
        setLoading(true);
        
        if (!formData) return;

await updateCourse(
    course._id,
    formData
);
        onClose();
    } catch (error) {
      const err = error as any;
        if(err.response?.status === 403) {
          alert(
            "You cannot edit this course because you are not its owner."
        );

        return;
        }
        alert(
        err.response?.data?.message ??
        "Failed to update course."
    );
    } finally {
        setLoading(false);

    }

}

  return (

    <Modal
      open={open}
      onClose={onClose}
      title="Edit Course"
      width="max-w-6xl"
    >

      <div className="space-y-8">

        <CourseForm

          course={formData}

          onChange={setFormData}

        />

        <div className="flex justify-end gap-4">

          <button

            onClick={onClose}

            className="border rounded-lg px-6 py-3"

          >

            Cancel

          </button>

          <button

            onClick={handleUpdate}

            disabled={loading}

            className="bg-green-600 text-white px-6 py-3 rounded-lg"

          >

            {

              loading

                ? "Updating..."

                : "Update Course"

            }

          </button>

        </div>

      </div>

    </Modal>

  );

}