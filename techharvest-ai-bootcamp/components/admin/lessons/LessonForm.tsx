"use client";

import { Lesson } from "@/types/lesson";
import VideoUploader from "./VideoUploader";

interface LessonFormProps {
  lesson: Lesson;
  onChange: (lesson: Lesson) => void;
}

export default function LessonForm({
  lesson,
  onChange,
}: LessonFormProps) {

  function update<K extends keyof Lesson>(
    key: K,
    value: Lesson[K]
  ) {
    onChange({
      ...lesson,
      [key]: value,
    });
  }

  function handleVideoUploaded(video: {
    url: string;
    publicId: string;
    duration: number;
  }) {
    onChange({
      ...lesson,
      video: {
        url: video.url,
        publicId: video.publicId,
      },
      duration: Math.ceil(video.duration / 60),
    });
  }

  return (
    <div className="grid grid-cols-1 gap-6">

      {/* Lesson Title */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Lesson Title
        </label>

        <input
          value={lesson.title}
          onChange={(e) =>
            update("title", e.target.value)
          }
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Introduction to ChatGPT"
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Description
        </label>

        <textarea
          rows={5}
          value={lesson.description}
          onChange={(e) =>
            update("description", e.target.value)
          }
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Lesson description..."
        />

      </div>

      {/* Video Upload */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Lesson Video
        </label>

        <VideoUploader
          value={lesson.video}
          onUploaded={handleVideoUploaded}
        />

        {lesson.video.url && (
          <div className="mt-3 rounded-lg bg-green-50 p-3 text-sm text-green-700">
            ✅ Video uploaded successfully
          </div>
        )}

      </div>

      {/* Duration */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Duration (Minutes)
        </label>

        <input
          type="number"
          value={lesson.duration}
          readOnly
          className="w-full rounded-lg border bg-slate-100 px-4 py-3"
        />

        <p className="mt-1 text-xs text-slate-500">
          Automatically calculated from the uploaded video.
        </p>

      </div>

      {/* Lesson Order */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Lesson Order
        </label>

        <input
          type="number"
          value={lesson.order}
          onChange={(e) =>
            update(
              "order",
              Number(e.target.value)
            )
          }
          className="w-full rounded-lg border px-4 py-3"
        />

      </div>

      {/* Instructor Notes */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Instructor Notes
        </label>

        <textarea
          rows={4}
          value={lesson.notes}
          onChange={(e) =>
            update("notes", e.target.value)
          }
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Private notes for instructors..."
        />

      </div>

      {/* Free Preview */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={lesson.isPreview}
          onChange={(e) =>
            update(
              "isPreview",
              e.target.checked
            )
          }
        />

        <span>Free Preview Lesson</span>

      </div>

      {/* Publish */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={lesson.isPublished}
          onChange={(e) =>
            update(
              "isPublished",
              e.target.checked
            )
          }
        />

        <span>Publish Immediately</span>

      </div>

    </div>
  );
}