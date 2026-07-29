"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { getCourses } from "@/services/course.service";

import { Course } from "@/types/course";

interface CourseContextType {
  courses: Course[];
  loading: boolean;
  error: string;
  refreshCourses: () => Promise<void>;
}

const CourseContext =
  createContext<CourseContextType | null>(null);

export function CourseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCourses = async () => {
    try {
      setLoading(true);

      const data = await getCourses();
      console.log("Courses from API:", data);

      setCourses(data);

      setError("");

    } catch (err) {

      setError("Unable to load courses.");

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    loadCourses();

  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        error,
        refreshCourses: loadCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourseContext() {

  const context = useContext(CourseContext);

  if (!context) {

    throw new Error(
      "useCourseContext must be used inside CourseProvider"
    );

  }

  return context;

}