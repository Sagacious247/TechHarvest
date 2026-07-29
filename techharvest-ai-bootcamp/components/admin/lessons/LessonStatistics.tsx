"use client";

interface LessonStatisticsProps {
  total: number;
  published: number;
  preview: number;
  duration: number;
}

export default function LessonStatistics({
  total,
  published,
  preview,
  duration,
}: LessonStatisticsProps) {

  const cards = [

    {
      title: "Total Lessons",
      value: total,
    },

    {
      title: "Published",
      value: published,
    },

    {
      title: "Preview Lessons",
      value: preview,
    },

    {
      title: "Total Duration",
      value: `${duration} mins`,
    },

  ];

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >

          <p className="text-sm text-slate-500">

            {card.title}

          </p>

          <h2 className="mt-3 text-3xl font-bold">

            {card.value}

          </h2>

        </div>

      ))}

    </div>

  );

}