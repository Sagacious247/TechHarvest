"use client";

import { Module } from "@/types/module";

interface Props {
  module: Module;
  onChange: (module: Module) => void;
}

export default function ModuleForm({
  module,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">

      {/* Module Title */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Module Title
        </label>

        <input
          type="text"
          value={module.title}
          onChange={(e) =>
            onChange({
              ...module,
              title: e.target.value,
            })
          }
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Introduction to AI"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Description
        </label>

        <textarea
          rows={5}
          value={module.description}
          onChange={(e) =>
            onChange({
              ...module,
              description: e.target.value,
            })
          }
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Describe what students will learn..."
        />
      </div>

      {/* Module Order */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Module Order
        </label>

        <input
          type="number"
          min={1}
          value={module.order}
          onChange={(e) =>
            onChange({
              ...module,
              order: Number(e.target.value),
            })
          }
          className="w-40 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Published */}
      <div className="flex items-center gap-3">

        <input
          id="published"
          type="checkbox"
          checked={module.isPublished}
          onChange={(e) =>
            onChange({
              ...module,
              isPublished: e.target.checked,
            })
          }
          className="h-5 w-5"
        />

        <label
          htmlFor="published"
          className="font-medium"
        >
          Publish immediately
        </label>

      </div>

    </div>
  );
}