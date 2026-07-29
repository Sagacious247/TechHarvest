// "use client";

// import { useCourseDetails } from "@/contexts/CourseDetailsContext";
// import EnrollButton from "@/components/courses/EnrollButton";

// export default function CourseDetailsContent() {

//   const {
//     course,
//     loading,
//     error,
//   } = useCourseDetails();

//   if (loading) {

//     return (

//       <main className="max-w-7xl mx-auto py-12 px-8">

//         <div className="bg-white rounded-xl shadow p-10">

//           <h1 className="text-3xl font-bold">

//             Loading...

//           </h1>

//         </div>

//       </main>

//     );

//   }

//   if (error) {

//     return (

//       <main className="max-w-7xl mx-auto py-12 px-8">

//         <div className="bg-white rounded-xl shadow p-10">

//           <h1 className="text-red-600 text-2xl">

//             {error}

//           </h1>

//         </div>

//       </main>

//     );

//   }

//   if (!course) {

//     return (

//       <main className="max-w-7xl mx-auto py-12 px-8">

//         <div className="bg-white rounded-xl shadow p-10">

//           <h1>

//             Course not found.

//           </h1>

//         </div>

//       </main>

//     );

//   }

//   const details = course.course;

// const totalModules = course.totalModules;

//   return (

//     <main className="max-w-7xl mx-auto py-12 px-8">

//       <div className="bg-white rounded-xl shadow p-10">

//         <img

//           src={details.thumbnail}

//           alt={course.course.title}

//           className="w-full h-72 object-cover rounded-xl"

//         />

//         <h1 className="text-4xl font-bold mt-8">

//           {course.course.title}

//         </h1>

//         <p className="mt-4 text-gray-600">

//           {course.course.description}

//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

//           <div>

//             <p className="text-sm text-gray-500">

//               Price

//             </p>

//             <h3 className="font-bold">

//               ₦{course.course.price.toLocaleString()}

//             </h3>

//           </div>

//           <div>

//             <p className="text-sm text-gray-500">

//               Duration

//             </p>

//             <h3 className="font-bold">

//               {course.course.duration}

//             </h3>

//           </div>

//           <div>

//             <p className="text-sm text-gray-500">

//               Level

//             </p>

//             <h3 className="font-bold">

//               {course.course.level}

//             </h3>

//           </div>

//           <div>

//             <p className="text-sm text-gray-500">

//               Modules

//             </p>

//             <h3 className="font-bold">

//               {course.totalModules}

//             </h3>

//           </div>

//         </div>

// <EnrollButton
//   courseId={course.course._id}
// />
//       </div>

//     </main>

//   );

// }


"use client";

import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Users,
  CheckCircle,
  PlayCircle,
  Lock,
  Award,
  ArrowRight,
} from "lucide-react";

import { useCourseDetails } from "@/contexts/CourseDetailsContext";
import EnrollButton from "@/components/courses/EnrollButton";

export default function CourseDetailsContent() {
  const {
    course,
    loading,
    error,
  } = useCourseDetails();

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="h-14 w-14 rounded-full border-4 border-green-500 border-t-transparent animate-spin mx-auto" />
          <p className="mt-6 text-slate-300 text-lg">
            Loading course...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="rounded-3xl bg-slate-900 border border-red-500/20 p-12 text-center">
          <h2 className="text-3xl font-bold text-red-400">
            {error}
          </h2>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="rounded-3xl bg-slate-900 p-12">
          <h2 className="text-3xl font-bold text-white">
            Course not found
          </h2>
        </div>
      </main>
    );
  }

  const details = course.course;

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src={details.thumbnail.url}
            alt={details.title}
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">

          <div className="grid lg:grid-cols-3 gap-14">

            {/* LEFT */}

            <div className="lg:col-span-2">

              <span className="inline-flex items-center rounded-full bg-green-500/20 px-5 py-2 text-green-400 font-semibold">

                {details.level}

              </span>

              <h1 className="mt-7 text-5xl lg:text-6xl font-black leading-tight">

                {details.title}

              </h1>

              <p className="mt-8 text-slate-300 text-xl leading-9">

                {details.description}

              </p>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

                  <BookOpen className="text-green-400 mb-4" />

                  <p className="text-slate-400 text-sm">

                    Modules

                  </p>

                  <h3 className="mt-2 text-3xl font-black">

                    {course.totalModules}

                  </h3>

                </div>

                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

                  <PlayCircle className="text-green-400 mb-4" />

                  <p className="text-slate-400 text-sm">

                    Lessons

                  </p>

                  <h3 className="mt-2 text-3xl font-black">

                    {course.totalLessons}

                  </h3>

                </div>

                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

                  <Clock3 className="text-green-400 mb-4" />

                  <p className="text-slate-400 text-sm">

                    Duration

                  </p>

                  <h3 className="mt-2 text-xl font-bold">

                    {details.duration}

                  </h3>

                </div>

                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

                  <Award className="text-green-400 mb-4" />

                  <p className="text-slate-400 text-sm">

                    Certificate

                  </p>

                  <h3 className="mt-2 text-xl font-bold text-green-400">

                    Included

                  </h3>

                </div>

              </div>

            </div>

                        {/* RIGHT */}

            <div>

              <div className="sticky top-28 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">

                <Image
                  src={details.thumbnail.url}
                  alt={details.title}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover"
                />

                <div className="p-8">

                  <h2 className="text-5xl font-black text-green-400">

                    ₦{details.price.toLocaleString()}

                  </h2>

                  <p className="mt-2 text-slate-400">

                    One payment • Lifetime Access

                  </p>

                  <div className="mt-8">

                    <EnrollButton
                      courseId={details._id}
                    />

                  </div>

                  <div className="mt-10 space-y-5">

                    <div className="flex justify-between">

                      <span className="text-slate-400">

                        Level

                      </span>

                      <span className="font-semibold">

                        {details.level}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">

                        Duration

                      </span>

                      <span className="font-semibold">

                        {details.duration}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">

                        Modules

                      </span>

                      <span className="font-semibold">

                        {course.totalModules}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">

                        Lessons

                      </span>

                      <span className="font-semibold">

                        {course.totalLessons}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">

                        Certificate

                      </span>

                      <span className="font-semibold text-green-400">

                        Included

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">

                        Community

                      </span>

                      <span className="font-semibold text-green-400">

                        Included

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COURSE CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2 space-y-16">

            {/* ABOUT */}

            <section>

              <h2 className="text-3xl font-black mb-8">

                About this Course

              </h2>

              <p className="text-slate-300 leading-9 text-lg">

                {details.description}

              </p>

            </section>

            {/* LEARNING OBJECTIVES */}

            {details.learningObjectives?.length > 0 && (

              <section>

                <h2 className="text-3xl font-black mb-8">

                  What You'll Learn

                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  {details.learningObjectives.map((item, index) => (

                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5"
                    >

                      <CheckCircle
                        className="text-green-400 shrink-0 mt-1"
                        size={22}
                      />

                      <p className="text-slate-300 leading-7">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

              </section>

            )}

            {/* REQUIREMENTS */}

            {details.requirements?.length > 0 && (

              <section>

                <h2 className="text-3xl font-black mb-8">

                  Requirements

                </h2>

                <div className="space-y-4">

                  {details.requirements.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-xl bg-slate-900 border border-slate-800 p-5"
                    >

                      <ArrowRight
                        className="text-green-400"
                        size={18}
                      />

                      <p className="text-slate-300">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

              </section>

            )}

            {/* TARGET AUDIENCE */}

            {details.targetAudience?.length > 0 && (

              <section>

                <h2 className="text-3xl font-black mb-8">

                  This Course Is For

                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  {details.targetAudience.map((item, index) => (

                    <div
                      key={index}
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 flex gap-4"
                    >

                      <Users
                        className="text-green-400 shrink-0"
                      />

                      <p className="text-slate-300">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

              </section>

            )}

                        {/* CURRICULUM */}

            <section>

              <h2 className="text-3xl font-black mb-10">

                Course Curriculum

              </h2>

              <div className="space-y-6">

                {course.curriculum.map((module, index) => (

                  <div
                    key={module._id}
                    className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
                  >

                    <div className="flex items-center justify-between px-8 py-6">

                      <div>

                        <p className="text-green-400 font-semibold text-sm">

                          MODULE {index + 1}

                        </p>

                        <h3 className="mt-2 text-2xl font-bold">

                          {module.title}

                        </h3>

                        <p className="mt-3 text-slate-400">

                          {module.description}

                        </p>

                      </div>

                      <div className="text-right">

                        <div className="flex items-center justify-end gap-2">

                          <BookOpen
                            size={18}
                            className="text-green-400"
                          />

                          <span className="font-semibold">

                            {module.totalLessons} Lessons

                          </span>

                        </div>

                      </div>

                    </div>

                    <div className="border-t border-slate-800">

                      {Array.from({
                        length: module.totalLessons,
                      }).map((_, lessonIndex) => (

                        <div
                          key={lessonIndex}
                          className="flex items-center justify-between px-8 py-4 border-b border-slate-800 last:border-none"
                        >

                          <div className="flex items-center gap-4">

                            <PlayCircle
                              size={18}
                              className="text-green-400"
                            />

                            <span className="text-slate-300">

                              Lesson {lessonIndex + 1}

                            </span>

                          </div>

                          <Lock
                            size={18}
                            className="text-slate-500"
                          />

                        </div>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          </div>

          {/* RIGHT SIDEBAR */}

          <aside className="space-y-8">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <GraduationCap
                className="text-green-400"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-bold">

                Why Learn With TechHarvest?

              </h3>

              <ul className="mt-8 space-y-5">

                <li className="flex gap-3">

                  <CheckCircle
                    size={20}
                    className="text-green-400 mt-1"
                  />

                  <span className="text-slate-300">

                    Practical projects that build real skills.

                  </span>

                </li>

                <li className="flex gap-3">

                  <CheckCircle
                    size={20}
                    className="text-green-400 mt-1"
                  />

                  <span className="text-slate-300">

                    Lifetime access to every lesson.

                  </span>

                </li>

                <li className="flex gap-3">

                  <CheckCircle
                    size={20}
                    className="text-green-400 mt-1"
                  />

                  <span className="text-slate-300">

                    Certificate upon completion.

                  </span>

                </li>

                <li className="flex gap-3">

                  <CheckCircle
                    size={20}
                    className="text-green-400 mt-1"
                  />

                  <span className="text-slate-300">

                    Exclusive student community.

                  </span>

                </li>

                <li className="flex gap-3">

                  <CheckCircle
                    size={20}
                    className="text-green-400 mt-1"
                  />

                  <span className="text-slate-300">

                    Continuous course updates.

                  </span>

                </li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="border-t border-slate-800 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-5xl font-black">

            Your Future Starts Today

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-xl leading-9">

            Stop waiting for the perfect time.
            Learn practical skills that can increase your value,
            income and opportunities in today's AI economy.

          </p>

          <div className="mt-12 flex justify-center">

            <div className="w-full max-w-sm">

              <EnrollButton
                courseId={details._id}
              />

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}