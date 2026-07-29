"use client";

import { useLearning } from "@/hooks/useLearning";

import VideoPlayer from "./VideoPlayer";

export default function LessonViewer() {

  const {

    selectedLesson,

    saveProgress,

    completeCurrentLesson,

  } = useLearning();

  console.log(
  "LessonViewer",
  selectedLesson?._id
);

  if (!selectedLesson) {

    return (

      <div className="bg-white rounded-xl shadow p-8">

        <h2 className="text-2xl font-bold">

          Select a lesson

        </h2>

      </div>

    );

  }

  return (

    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-3xl font-bold">

        {selectedLesson.title}

      </h2>

      <p className="mt-3 text-gray-600">

        {selectedLesson.description}

      </p>

      <div className="mt-8">

        <VideoPlayer />

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-semibold">

          Notes

        </h3>

        <p className="mt-3 whitespace-pre-line">

          {selectedLesson.notes}

        </p>

      </div>

      {selectedLesson.resources.length > 0 && (

  <div className="mt-8">

    <h3 className="text-xl font-semibold">

      Resources

    </h3>

    <ul className="mt-3 space-y-3">

      {selectedLesson.resources.length > 0 && (

  <div className="mt-8">

    <h3 className="text-xl font-semibold">
      Resources
    </h3>

    <ul className="mt-3 space-y-2">

      {selectedLesson.resources.map((resource) => (

        <li key={resource.url}>

          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {resource.name}
          </a>

        </li>

      ))}

    </ul>

  </div>

)}

    </ul>

  </div>

)}

    </div>

  );

}