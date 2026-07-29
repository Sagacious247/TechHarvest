"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { useCourses } from "@/hooks/useCourses";

import CourseCard from "@/components/courses/CourseCard";

import NoCourses from "@/components/courses/NoCourses";

export default function CoursesContent() {

  const {
    courses,
    loading,
    error,
  } = useCourses();

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">

        <div className="text-white text-xl animate-pulse">

          Loading premium courses...

        </div>

      </div>
    );

  }

  if (error) {

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">

        <p className="text-red-400 text-lg">

          {error}

        </p>

      </div>
    );

  }

  if (filteredCourses.length === 0) {

    return <NoCourses />;

  }

  return (

    <main className="bg-slate-950 min-h-screen">

      <section className="max-w-7xl mx-auto px-6 pt-36 pb-20">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-green-400 font-semibold tracking-widest uppercase">

            Learn • Build • Earn

          </span>

          <h1 className="mt-5 text-5xl font-black text-white">

            Explore Our Courses

          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-8">

            Practical AI courses designed to help you build real-world
            skills, grow your career and increase your income.

          </p>

        </div>

        <div className="mt-14 max-w-xl mx-auto relative">

          <Search
            size={20}
            className="absolute left-5 top-4 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-14 pr-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500"
          />

        </div>

        <div className="grid gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course._id}
              course={course}
            />

          ))}

        </div>

      </section>

    </main>

  );

}








// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// import { getCourse } from "@/services/course.service";
// import { CourseDetails } from "@/types/course";

// interface CourseDetailsContextType {
//   course: CourseDetails | null;
//   loading: boolean;
//   error: string;
//   refreshCourse: () => Promise<void>;
// }

// const CourseDetailsContext =
//   createContext<CourseDetailsContextType | null>(null);

// interface Props {
//   children: ReactNode;
//   courseId: string;
// }

// export function CourseDetailsProvider({
//   children,
//   courseId,
// }: Props) {
//   const [course, setCourse] =
//     useState<CourseDetails | null>(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");

//   const loadCourse = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const courseData = await getCourse(courseId);

//       console.log(
//         "Loaded Course:",
//         courseData
//       );

//       setCourse(courseData);
//     } catch (err) {
//       console.error(err);

//       setError(
//         "Unable to load course."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!courseId) return;

//     loadCourse();
//   }, [courseId]);

//   return (
//     <CourseDetailsContext.Provider
//       value={{
//         course,
//         loading,
//         error,
//         refreshCourse: loadCourse,
//       }}
//     >
//       {children}
//     </CourseDetailsContext.Provider>
//   );
// }

// export function useCourseDetails() {
//   const context =
//     useContext(CourseDetailsContext);

//   if (!context) {
//     throw new Error(
//       "useCourseDetails must be used inside CourseDetailsProvider"
//     );
//   }

//   return context;
// }