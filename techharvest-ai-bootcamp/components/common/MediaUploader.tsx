"use client";

import { useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Trash2, RefreshCw } from "lucide-react";

import { uploadImage } from "@/services/media.service";

interface Props {
    label: string;
    value: {
        url: string;
        publicId: string;
    };

    onChange: (image: {
        url: string;
        publicId: string;
    }) => void;
}

export default function MediaUploader({

  label,

  value,

  onChange,

}: Props) {

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  async function handleFile(file: File) {

    try {

      setUploading(true);

      setProgress(0);

      const image = await uploadImage(

        file,

        setProgress

      );

      onChange(image);

    } catch (error) {

      console.error(error);

      alert("Upload failed.");

    } finally {

      setUploading(false);

    }

  }

  const {

    getRootProps,

    getInputProps,

  } = useDropzone({

    accept: {

      "image/*": [

        ".png",

        ".jpg",

        ".jpeg",

        ".webp",

      ],

    },

    maxFiles: 1,

    maxSize: 5 * 1024 * 1024,

    onDrop(files) {

      if (files.length > 0) {

        handleFile(files[0]);

      }

    },

  });

  return (

    <div className="space-y-4">

      <label className="font-semibold text-lg">

        {label}

      </label>

      {
    value?.url ? (

          <div className="space-y-4">

            <Image
              src={value.url || "/images/course-placeholder.png"}
              alt="Preview"
              width={800}
              height={400}
              className="rounded-xl border object-cover w-full h-72"
            />

            <div className="flex gap-3">

              <div

                {...getRootProps()}

                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"

              >

                <input {...getInputProps()} />

                <RefreshCw size={16} />

                Replace

              </div>

              <button
                type="button"
                onClick={() => onChange({
                 url: "",
                 publicId: "",
             })}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >

                <Trash2 size={16} />

                Remove

              </button>

            </div>

          </div>

        ) : (

          <div

            {...getRootProps()}

            className="border-2 border-dashed rounded-xl h-72 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition"

          >

            <input {...getInputProps()} />

            <UploadCloud

              size={48}

              className="text-green-600"

            />

            <p className="mt-4 font-semibold">

              Drag & Drop Image Here

            </p>

            <p className="text-gray-500">

              or Click to Browse

            </p>

            <p className="text-sm text-gray-400 mt-2">

              PNG • JPG • JPEG • WEBP

            </p>

            <p className="text-xs text-gray-400">

              Maximum 5MB

            </p>

          </div>

        )

      }

      {

        uploading && (

          <div className="space-y-2">

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div

                className="bg-green-600 h-3 rounded-full transition-all"

                style={{

                  width: `${progress}%`,

                }}

              />

            </div>

            <p className="text-sm text-green-700">

              Uploading... {progress}%

            </p>

          </div>

        )

      }

    </div>

  );

}
