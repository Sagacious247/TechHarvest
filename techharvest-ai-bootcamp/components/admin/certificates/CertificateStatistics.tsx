"use client";

import {
  Award,
  CalendarDays,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

interface Props {
  total: number;
  today: number;
  thisMonth: number;
  verified: number;
}

export default function CertificateStatistics({
  total,
  today,
  thisMonth,
  verified,
}: Props) {
  const cards = [
    {
      title: "Total Certificates",
      value: total,
      icon: Award,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Issued Today",
      value: today,
      icon: CalendarDays,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "This Month",
      value: thisMonth,
      icon: BookOpen,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      title: "Verified",
      value: verified,
      icon: ShieldCheck,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {card.value}
              </h2>
            </div>

            <div
              className={`rounded-xl p-3 ${card.bg}`}
            >
              <card.icon
                className={`h-7 w-7 ${card.color}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}