"use client";

import { useEffect, useRef, useState } from "react";

import {
  Upload,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import {
  getLandingSettings,
  updateLandingSettings,
} from "@/services/landingSettings.service";

import { uploadLandingVideo } from "@/services/uploadApi";

export default function LandingVideoUploader() {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [settings, setSettings] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [fileName, setFileName] =
    useState("");

  async function loadSettings() {
    const data =
      await getLandingSettings();

    setSettings(data);

    setLoading(false);
  }

  useEffect(() => {
    loadSettings();
  }, []);

  async function handleSelect(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    try {
      setUploading(true);

      setProgress(10);

      const timer = setInterval(() => {
        setProgress((old) => {
          if (old >= 90) return old;

          return old + 10;
        });
      }, 400);

      const video =
        await uploadLandingVideo(file);

      clearInterval(timer);

      setProgress(100);

      await updateLandingSettings({
        previewVideo: video,
      });

      await loadSettings();

    } catch (err) {
      console.error(err);

      alert("Video upload failed.");
    } finally {
      setUploading(false);
    }
  }

  if (loading)
    return <p>Loading...</p>;

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">

        Bootcamp Preview Video

      </h2>

      <p className="mt-2 text-slate-500">

        Upload the trailer shown on the landing page.

      </p>

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="video/*"
        onChange={handleSelect}
      />

      <button
        type="button"
        disabled={uploading}
        onClick={() =>
          inputRef.current?.click()
        }
        className="mt-8 flex items-center gap-3 rounded-xl border px-5 py-3 hover:bg-slate-50"
      >
        {uploading ? (
          <Loader2
            size={18}
            className="animate-spin"
          />
        ) : (
          <Upload size={18} />
        )}

        {uploading
          ? "Uploading..."
          : "Choose Preview Video"}
      </button>

      {fileName && (
        <p className="mt-4 text-sm text-slate-600">
          {fileName}
        </p>
      )}

      {uploading && (
        <div className="mt-6">

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full bg-green-600 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-2 text-sm">

            {progress}%

          </p>

        </div>
      )}

      {!uploading &&
        settings?.previewVideo?.url && (
          <>

            <video
              controls
              className="mt-8 w-full rounded-xl border"
              src={settings.previewVideo.url}
            />

            <div className="mt-4 flex items-center gap-2 text-green-600">

              <CheckCircle2 size={18} />

              Preview video uploaded successfully

            </div>

          </>
        )}

    </div>
  );
}