"use client";

import {
  BookOpen,
  CheckCircle2,
  FileText,
  Star,
} from "lucide-react";

interface Props {
  total: number;
  published: number;
  draft: number;
  featured: number;
}

const stats = [
  {
    key: "total",
    title: "Total Courses",
    color: "text-blue-600",
    bg: "bg-blue-50",
    icon: BookOpen,
  },
  {
    key: "published",
    title: "Published",
    color: "text-green-600",
    bg: "bg-green-50",
    icon: CheckCircle2,
  },
  {
    key: "draft",
    title: "Draft",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    icon: FileText,
  },
  {
    key: "featured",
    title: "Featured",
    color: "text-purple-600",
    bg: "bg-purple-50",
    icon: Star,
  },
];

export default function CoursesStats({
  total,
  published,
  draft,
  featured,
}: Props) {
  const values = {
    total,
    published,
    draft,
    featured,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.key}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
          >
            <div className="flex justify-between items-start">

              <div>

                <p className="text-sm text-slate-500">

                  {item.title}

                </p>

                <h2 className={`mt-3 text-4xl font-bold ${item.color}`}>

                  {values[item.key as keyof typeof values]}

                </h2>

              </div>

              <div
                className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center`}
              >
                <Icon className={item.color} size={26} />
              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
}