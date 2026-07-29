"use client";

import {
  Users,
  GraduationCap,
  BookOpen,
  Layers3,
  PlayCircle,
  Award,
  CreditCard,
  Wallet,
} from "lucide-react";

import { OverviewStatistics } from "@/types/analytics";

interface Props {
  overview: OverviewStatistics;
}

export default function AnalyticsOverview({
  overview,
}: Props) {
  const cards = [
    {
      title: "Students",
      value: overview.students,
      sub: `${overview.activeStudents} Active`,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Courses",
      value: overview.courses,
      sub: `${overview.publishedCourses} Published`,
      icon: GraduationCap,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Modules",
      value: overview.modules,
      sub: "Learning Modules",
      icon: Layers3,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Lessons",
      value: overview.lessons,
      sub: `${overview.publishedLessons} Published`,
      icon: BookOpen,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Preview Lessons",
      value: overview.previewLessons,
      sub: "Free Lessons",
      icon: PlayCircle,
      color: "bg-yellow-50 text-yellow-700",
    },
    {
      title: "Certificates",
      value: overview.certificates,
      sub: "Issued",
      icon: Award,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Revenue",
      value: `₦${overview.revenue.toLocaleString()}`,
      sub: "Total Revenue",
      icon: Wallet,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Payments",
      value: overview.paidPayments,
      sub: `${overview.pendingPayments} Pending • ${overview.failedPayments} Failed`,
      icon: CreditCard,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {card.sub}
                </p>
              </div>

              <div
                className={`rounded-xl p-4 ${card.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}