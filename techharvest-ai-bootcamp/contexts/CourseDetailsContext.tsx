"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { getCourse } from "@/services/course.service";

import { CourseDetails } from "@/types/course";

interface CourseDetailsContextType {
  course: CourseDetails | null;
  loading: boolean;
  error: string;
  refreshCourse: () => Promise<void>;
}

const CourseDetailsContext =
  createContext<CourseDetailsContextType | null>(
    null
  );

interface Props {
  children: ReactNode;
  courseId: string;
}

export function CourseDetailsProvider({
  children,
  courseId,
}: Props) {

  const [course, setCourse] =
useState<CourseDetails | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const loadCourse = async () => {

    try {

      setLoading(true);

      const data =
        await getCourse(courseId);
        console.log("Context Data:", data);

      setCourse(data);

      setError("");

    } catch (err) {

      console.error(err);

      setError(
        "Unable to load course."
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    if (courseId) {

      loadCourse();

    }

  }, [courseId]);

  return (

    <CourseDetailsContext.Provider
      value={{
        course,
        loading,
        error,
        refreshCourse: loadCourse,
      }}
    >

      {children}

    </CourseDetailsContext.Provider>

  );


 
}

export function useCourseDetails() {

  const context =
    useContext(CourseDetailsContext);

  if (!context) {

    throw new Error(
      "useCourseDetails must be used inside CourseDetailsProvider"
    );

  }

  return context;

}