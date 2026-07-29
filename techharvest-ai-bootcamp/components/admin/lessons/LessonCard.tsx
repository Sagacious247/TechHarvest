// "use client";

// import {
//   Clock,
//   Eye,
//   CheckCircle,
//   Pencil,
//   Trash2,
// } from "lucide-react";

// import { Lesson } from "@/types/lesson";

// interface LessonCardProps {
//   lesson: Lesson;
//   onEdit: (lesson: Lesson) => void;
//   onDelete: (lesson: Lesson) => void;
// }

// export default function LessonCard({
//   lesson,
//   onEdit,
//   onDelete,
// }: LessonCardProps) {

//   return (
//     <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">

//       <div className="flex justify-between items-start">

//         <div>

//           <h3 className="text-lg font-bold">

//             {lesson.order}. {lesson.title}

//           </h3>

//           <p className="mt-2 text-sm text-slate-500">
//   {lesson.description || "No description"}
// </p>

// {lesson.video?.url && (
//   <div className="mt-5 overflow-hidden rounded-xl border">
//     <video
//       controls
//       preload="metadata"
//       className="w-full"
//       src={lesson.video.url}
//     />
//   </div>
// )}

//         </div>

//         <div className="flex gap-2">

//           <button
//             onClick={() => onEdit(lesson)}
//             className="rounded-lg border p-2 hover:bg-slate-100"
//           >
//             <Pencil size={16} />
//           </button>

//           <button
//             onClick={() => onDelete(lesson)}
//             className="rounded-lg border p-2 text-red-600 hover:bg-red-50"
//           >
//             <Trash2 size={16} />
//           </button>

//         </div>

//       </div>

//       <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">

//         <span className="flex items-center gap-2">

//           <Clock size={16} />

//           {lesson.duration} mins

//         </span>

//         <span className="flex items-center gap-2">

//           <Eye size={16} />

//           {lesson.isPreview ? "Preview" : "Premium"}

//         </span>

//         <span className="flex items-center gap-2">

//           <CheckCircle size={16} />

//           {lesson.isPublished ? "Published" : "Draft"}

//         </span>

//       </div>

//     </div>
//   );
// }

"use client";

import {
  Clock,
  Eye,
  CheckCircle,
  Pencil,
  Trash2,
} from "lucide-react";

import { Lesson } from "@/types/lesson";

interface LessonCardProps {
  lesson: Lesson;
  onEdit: (lesson: Lesson) => void;
  onDelete: (lesson: Lesson) => void;
}

export default function LessonCard({
  lesson,
  onEdit,
  onDelete,
}: LessonCardProps) {

  return (

    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">

      {/* Video */}

      {lesson.video?.url ? (

        <video
          controls
          preload="metadata"
          className="aspect-video w-full bg-black"
          src={lesson.video.url}
        />

      ) : (

        <div className="flex aspect-video items-center justify-center bg-slate-100 text-slate-400">

          No Video Uploaded

        </div>

      )}

      {/* Content */}

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-xl font-bold">

              {lesson.order}. {lesson.title}

            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">

              {lesson.description ||
                "No description available."}

            </p>

          </div>

          <div className="flex gap-2">

            <button
              onClick={() => onEdit(lesson)}
              className="rounded-lg border p-2 hover:bg-slate-100"
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() => onDelete(lesson)}
              className="rounded-lg border p-2 text-red-600 hover:bg-red-50"
            >
              <Trash2 size={18} />
            </button>

          </div>

        </div>

        {/* Badges */}

        <div className="mt-6 flex flex-wrap gap-3">

          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">

            <Clock size={16} />

            {lesson.duration} mins

          </div>

          <div
            className={`rounded-full px-4 py-2 text-sm ${
              lesson.isPreview
                ? "bg-blue-100 text-blue-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            <Eye className="mr-1 inline" size={15} />

            {lesson.isPreview
              ? "Preview Lesson"
              : "Premium Lesson"}

          </div>

          <div
            className={`rounded-full px-4 py-2 text-sm ${
              lesson.isPublished
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <CheckCircle
              className="mr-1 inline"
              size={15}
            />

            {lesson.isPublished
              ? "Published"
              : "Draft"}

          </div>

        </div>

      </div>

    </div>

  );

}