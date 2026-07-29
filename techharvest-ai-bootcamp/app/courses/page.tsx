"use client";

import { CourseProvider } from "@/contexts/CourseContext";

import CoursesContent from "./CoursesContent";

export default function CoursesPage() {

  return (

    <CourseProvider>

      <CoursesContent />

    </CourseProvider>

  );

}