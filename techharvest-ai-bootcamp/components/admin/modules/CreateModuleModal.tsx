"use client";

import { useState } from "react";

import ModuleForm from "./ModuleForm";

import {
  Module,
  CreateModuleData,
} from "@/types/module";

interface Props {
  open: boolean;
  onClose: () => void;
  courseId: string;
  createModule: (
    data: CreateModuleData
  ) => Promise<void>;
}

const emptyModule: Module = {
  _id: "",
  title: "",
  description: "",
  order: 1,
  course: "",
  isPublished: false,
  createdAt: "",
  updatedAt: "",
};

export default function CreateModuleModal({
  open,
  onClose,
  courseId,
  createModule,
}: Props) {

  const [module, setModule] =
    useState<Module>({
      ...emptyModule,
      course: courseId,
    });

  const [loading, setLoading] =
    useState(false);

  if (!open) return null;

  async function handleSubmit() {

    try {

      setLoading(true);

      await createModule({

        title: module.title,

        description: module.description,

        order: module.order,

        course: courseId,

      });

      setModule({
        ...emptyModule,
        course: courseId,
      });

      onClose();

    } catch (error) {

      console.error(error);

      alert("Failed to create module.");

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
              Create Module
            </h2>

            <p className="text-gray-500">
              Add a new learning module.
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
            module={module}
            onChange={setModule}
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
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading
              ? "Creating..."
              : "Create Module"}
          </button>

        </div>

      </div>

    </div>

  );

}