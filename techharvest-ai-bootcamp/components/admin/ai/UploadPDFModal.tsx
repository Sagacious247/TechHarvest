"use client";

import { useState } from "react";
import { X, Upload, FileText } from "lucide-react";
import { uploadPDF } from "@/services/aiUpload.service";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function UploadPDFModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  if (!open) return null;

  const submit = async () => {
    if (!file) return;

    try {
      setUploading(true);

      await uploadPDF(file);

      alert("Knowledge uploaded successfully.");

      onSuccess?.();

      onClose();
    } catch (err: any) {
      alert(
        err?.response?.data?.message ??
          "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Upload Knowledge
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <input
         id="pdf-upload"
         type="file"
         accept=".pdf"
         className="hidden"
         onChange={(e) =>
         setFile(e.target.files?.[0] ?? null)
        }
       />

<label
  htmlFor="pdf-upload"
  className="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition"
>
  <Upload className="mb-4" size={40} />

  <p className="font-semibold">
    Click to choose a PDF
  </p>

  <p className="text-sm text-slate-500 mt-2">
    PDF files only
  </p>
</label>

        {file && (

          <div className="mt-6 flex items-center gap-3 rounded-xl bg-slate-100 p-4">

            <FileText />

            <div>

              <p className="font-medium">
                {file.name}
              </p>

              <p className="text-sm text-slate-500">
                {(file.size / 1024 / 1024).toFixed(2)}
                {" "}
                MB
              </p>

            </div>

          </div>

        )}

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            disabled={!file || uploading}
            onClick={submit}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            {uploading
              ? "Uploading..."
              : "Upload"}
          </button>

        </div>

      </div>

    </div>
  );
}