"use client";

import LandingVideoUploader from "@/components/admin/settings/LandingVideoUploader";

export default function LandingSettingsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Landing Page Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage the TechHarvest Bootcamp Preview video.
        </p>

      </div>

      <LandingVideoUploader />

    </div>
  );
}