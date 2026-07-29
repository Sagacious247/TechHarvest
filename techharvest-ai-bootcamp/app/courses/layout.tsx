"use client";

import { CourseProvider } from "@/contexts/CourseContext";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CourseProvider>
      {children}
    </CourseProvider>
  );
}