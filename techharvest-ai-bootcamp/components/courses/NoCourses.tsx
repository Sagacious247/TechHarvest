"use client";

export default function NoCourses() {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <div className="text-7xl">
        🎓
      </div>

      <h2 className="mt-6 text-3xl font-bold text-gray-900">
        No Courses Available Yet
      </h2>

      <p className="mt-4 max-w-xl text-center text-gray-600 leading-8">

        Our instructors are preparing high-quality learning
        experiences for you.

        <br />

        New courses will be published very soon.

      </p>

      <button
        disabled
        className="mt-8 rounded-xl bg-gray-200 px-8 py-3 text-gray-500 cursor-not-allowed"
      >
        Coming Soon
      </button>

    </div>
  );
}