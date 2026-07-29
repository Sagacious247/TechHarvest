"use client";

import { useState } from "react";
import CourseForm from "./CourseForm";
// import { useAdminCourses } from "@/hooks/useAdminCourses";
import { Course } from "@/types/course";

interface Props {
  open: boolean;
  onClose: () => void;
  createCourse: (data: Partial<Course>) => Promise<void>;
}

const emptyCourse: Course = {
  _id: "",
  title: "",
  slug: "",
  shortDescription: "",
  description: "",
  price: 0,
  duration: "",
  level: "Beginner",
  category: "",
  thumbnail: {
    url: "",
    publicId: "",
  },
  trailerVideo: "",
  learningObjectives: [],
  requirements: [],
  targetAudience: [],
  createdBy: "",
  instructor: "",
  status: "Draft",
  isFeatured: false,
  enrollmentCount: 0,
  createdAt: "",
  updatedAt: "",
};

export default function CreateCourseModal({
  open,
  onClose,
  createCourse,
}: Props) {

  const [course, setCourse] =
    useState<Course>(emptyCourse);

  const [loading, setLoading] =
    useState(false);

  if (!open) return null;

  async function handleSubmit() {

  try {
    console.log(
    JSON.stringify(course, null, 2)
);

    setLoading(true);

    // await createCourse(course);
    const {
    _id,
    createdAt,
    updatedAt,
    enrollmentCount,
    createdBy,
    instructor,
    ...courseData
} = course;

await createCourse(courseData);

    setCourse(emptyCourse);

    alert("Course created successfully.");

    onClose();

  } catch (error) {

    console.error(error);

    alert("Failed to create course.");

  } finally {

    setLoading(false);

  }

}

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden">

        <div className="border-b px-8 py-6 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">

              Create Course

            </h2>

            <p className="text-gray-500">

              Add a new TechHarvest course.

            </p>

          </div>

          <button

            onClick={onClose}

            className="text-gray-500 hover:text-black text-2xl"

          >

            ×

          </button>

        </div>

        <div className="p-8 max-h-[75vh] overflow-y-auto">

          <CourseForm

            course={course}

            onChange={setCourse}

          />

        </div>

        <div className="border-t px-8 py-6 flex justify-end gap-4">

          <button

            onClick={onClose}

            disabled={loading}

            className="px-6 py-3 rounded-lg border"

          >

            Cancel

          </button>

          <button

            onClick={handleSubmit}

            disabled={loading}

            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"

          >

            {

              loading

                ? "Creating..."

                : "Create Course"

            }

          </button>

        </div>

      </div>

    </div>

  );

}