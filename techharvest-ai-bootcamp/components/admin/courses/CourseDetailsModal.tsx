"use client";

import Modal from "@/components/common/Modal";
import { Course } from "@/types/course";

interface Props {
  open: boolean;
  course: Course | null;
  onClose: () => void;
}

export default function CourseDetailsModal({
  open,
  course,
  onClose,
}: Props) {
  if (!course) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title=""
      width="max-w-6xl"
    >
      <div className="flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              {course.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {course.shortDescription}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-8 py-8 space-y-10">

          <img
            src={
              course.thumbnail?.url ||
              "/images/course-placeholder.png"
            }
            alt={course.title}
            className="w-full h-80 rounded-xl object-cover border"
          />

          {/* Course Information */}

          <div className="grid md:grid-cols-2 gap-6">

            <Info title="Category" value={course.category} />

            <Info title="Level" value={course.level} />

            <Info title="Duration" value={course.duration} />

            <Info
              title="Price"
              value={`₦${course.price.toLocaleString()}`}
            />

            <Info title="Status" value={course.status} />

            <Info
              title="Featured"
              value={course.isFeatured ? "Yes" : "No"}
            />

          </div>

          {/* Description */}

          <Section title="Full Description">
            <p className="leading-8 whitespace-pre-line">
              {course.description}
            </p>
          </Section>

          {/* Learning Objectives */}

          <Section title="Learning Objectives">
            {course.learningObjectives.length ? (
              <ul className="list-disc ml-6 space-y-2">
                {course.learningObjectives.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
          </Section>

          {/* Requirements */}

          <Section title="Requirements">
            {course.requirements.length ? (
              <ul className="list-disc ml-6 space-y-2">
                {course.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
          </Section>

          {/* Target Audience */}

          <Section title="Target Audience">
            {course.targetAudience.length ? (
              <ul className="list-disc ml-6 space-y-2">
                {course.targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <EmptyState />
            )}
          </Section>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 bg-white border-t px-8 py-5 flex justify-end">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white"
          >
            Close
          </button>

        </div>

      </div>
    </Modal>
  );
}

/* ------------------------------------------------ */

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-xl p-5 bg-gray-50">
      <h4 className="font-semibold text-gray-700 mb-1">
        {title}
      </h4>

      <p className="text-lg">{value}</p>
    </div>
  );
}

/* ------------------------------------------------ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>

      {children}
    </section>
  );
}

/* ------------------------------------------------ */

function EmptyState() {
  return (
    <p className="text-gray-400 italic">
      No information available.
    </p>
  );
}