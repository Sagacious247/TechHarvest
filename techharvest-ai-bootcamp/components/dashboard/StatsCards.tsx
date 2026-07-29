import { DashboardStats } from "@/types/dashboard";

interface Props {
  stats: DashboardStats;
}

export default function StatsCards({
  stats,
}: Props) {
  const cards = [
    {
      title: "Courses",
      value: stats.totalCourses,
    },
    {
      title: "Lessons",
      value: stats.completedLessons,
    },
    {
      title: "Progress",
      value: `${stats.completionRate}%`,
    },
    {
      title: "Certificates",
      value: stats.certificates,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-2xl shadow p-6"
        >

          <p className="text-gray-500">
            {card.title}
          </p>

          <h2 className="text-4xl font-black mt-2 text-green-600">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}