"use client";

import { useEffect, useState } from "react";

import ModuleForm from "./ModuleForm";

import {
  Module,
  UpdateModuleData,
} from "@/types/module";

interface Props {
  open: boolean;
  module: Module | null;
  onClose: () => void;
  updateModule: (
    moduleId: string,
    data: UpdateModuleData
  ) => Promise<void>;
}

export default function EditModuleModal({
  open,
  module,
  onClose,
  updateModule,
}: Props) {

  const [form, setForm] =
    useState<Module | null>(module);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    setForm(module);
  }, [module]);

  if (!open || !form) return null;

async function handleSubmit() {

  if (!form) return;

  try {
    setLoading(true);

    await updateModule(form._id, {
      title: form.title,
      description: form.description,
      order: form.order,
      isPublished: form.isPublished,
    });

    onClose();

  } catch (error) {
    console.error(error);
    alert("Failed to update module.");
  } finally {
    setLoading(false);
  }
}

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">

        <div className="border-b px-8 py-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Edit Module
            </h2>

            <p className="text-gray-500">
              Update this learning module.
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto">

          <ModuleForm
            module={form}
            onChange={setForm}
          />

        </div>

        <div className="border-t px-8 py-6 flex justify-end gap-4">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

      </div>

    </div>

  );

}