"use client";

import AnalyticsOverview from "@/components/admin/analytics/AnalyticsOverview";
import { useAnalytics } from "@/hooks/useAnalytics";
import RevenueChart from "@/components/admin/analytics/RevenueChart";
import EnrollmentChart from "@/components/admin/analytics/EnrollmentChart";
import TopCoursesTable from "@/components/admin/analytics/TopCoursesTable";
import RecentStudents from "@/components/admin/analytics/RecentStudents";
import RecentPayments from "@/components/admin/analytics/RecentPayments";
import RecentCertificates from "@/components/admin/analytics/RecentCertificates";

export default function AnalyticsPage() {
  const {
    analytics,
    loading,
    error,
  } = useAnalytics();

  if (loading) {
    return (
      <div className="p-10">
        Loading Analytics...
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-red-600">
        {error || "Unable to load analytics."}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-500">
          Track your platform performance in real time.
        </p>
      </div>

      <AnalyticsOverview
        overview={analytics.overview}
      />

      <div className="grid gap-8 lg:grid-cols-2">

    <RevenueChart
        revenue={analytics.revenue}
    />

<EnrollmentChart
    enrollments={analytics.enrollments}
/>
    <TopCoursesTable
  courses={analytics.topCourses}
/>

 <RecentStudents
    students={analytics.latestStudents}
  />

  <RecentPayments
    payments={analytics.latestPayments}
  />

  <RecentCertificates
    certificates={analytics.latestCertificates}
  />

</div>
    </div>
  );
}