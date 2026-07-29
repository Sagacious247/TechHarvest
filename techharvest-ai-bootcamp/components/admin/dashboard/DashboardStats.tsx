"use client";

import {
  Users,
  BookOpen,
  GraduationCap,
  CreditCard,
  Award,
  FolderOpen,
  PlayCircle,
} from "lucide-react";

import StatisticCard from "./StatisticCard";

import {
  AdminDashboardStatistics,
} from "@/types/adminDashboard";

interface Props {
  statistics: AdminDashboardStatistics;
}

export default function DashboardStats({
  statistics,
}: Props) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">


      <StatisticCard
        title="Students"
        value={statistics.students}
        icon={<Users size={28} />}
        color="bg-blue-600"
      />

      <StatisticCard
        title="Courses"
        value={statistics.courses}
        icon={<BookOpen size={28} />}
        color="bg-green-600"
      />

      <StatisticCard
        title="Modules"
        value={statistics.modules}
        icon={<FolderOpen size={28} />}
        color="bg-indigo-600"
      />

      <StatisticCard
        title="Lessons"
        value={statistics.lessons}
        icon={<PlayCircle size={28} />}
        color="bg-cyan-600"
      />

      <StatisticCard
        title="Enrollments"
        value={statistics.enrollments}
        icon={<GraduationCap size={28} />}
        color="bg-purple-600"
      />

      <StatisticCard
        title="Payments"
        value={statistics.payments}
        icon={<CreditCard size={28} />}
        color="bg-orange-500"
      />

      <StatisticCard
        title="Certificates"
        value={statistics.certificates}
        icon={<Award size={28} />}
        color="bg-pink-600"
      />

    </div>

  );

}