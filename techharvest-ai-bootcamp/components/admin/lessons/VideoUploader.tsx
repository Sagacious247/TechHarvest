"use client";

import { useRef, useState } from "react";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";

import { uploadLessonVideo } from "@/services/uploadApi";

interface UploadedVideo {
  url: string;
  publicId: string;
  duration: number;
}

interface Props {
  value?: {
    url: string;
    publicId: string;
  };

  onUploaded: (
    video: UploadedVideo
  ) => void;
}

export default function VideoUploader({
  value,
  onUploaded,
}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [fileName, setFileName] =
    useState("");

  async function handleSelect(
  e: React.ChangeEvent<HTMLInputElement>
) {

  const file = e.target.files?.[0];

  if (!file) return;

  setFileName(file.name);

  try {

    setUploading(true);

    setProgress(0);

    console.log("=== NEW CLOUDINARY UPLOADER ===");

const video = await uploadLessonVideo(
  file,
  (progress) => {
    console.log("Cloudinary Progress:", progress);
    setProgress(progress);
  }
);

    setProgress(100);

    onUploaded(video);

  } catch (err: any) {

    console.error(err);

    alert(
      err?.response?.data?.error?.message ||
      err?.message ||
      "Video upload failed."
    );

  } finally {

    setUploading(false);

  }

}

  return (

    <div className="space-y-4">

      <label className="block text-sm font-semibold">

        Lesson Video

      </label>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        hidden
        onChange={handleSelect}
      />

      <button
        type="button"
        disabled={uploading}
        onClick={() =>
          inputRef.current?.click()
        }
        className="flex items-center gap-3 rounded-xl border px-5 py-3 hover:bg-slate-50"
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
          : "Choose Video"}

      </button>

      {fileName && (

        <div className="text-sm text-slate-600">

          {fileName}

        </div>

      )}

      {uploading && (

        <div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">

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

      {!uploading && value?.url && (

        <div className="flex items-center gap-2 text-green-600">

          <CheckCircle2 size={18} />

          Video uploaded successfully

        </div>

      )}

    </div>

  );

}