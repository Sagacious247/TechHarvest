"use client";

import { useParams } from "next/navigation";

import { CourseDetailsProvider } from "@/contexts/CourseDetailsContext";

import CourseDetailsContent from "./CourseDetailsContent";

export default function CourseDetailsPage() {

  const params = useParams();

  const courseId = params.id as string;

  return (

    <CourseDetailsProvider
      courseId={courseId}
    >

      <CourseDetailsContent />

    </CourseDetailsProvider>

  );

}