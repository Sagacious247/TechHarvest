"use client";

import Link from "next/link";
import {
  FolderOpen,
  PlayCircle,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

import ModuleActions from "./ModuleActions";
import { Module } from "@/types/module";

interface Props {
  module: Module;
  lessonCount?: number;

  onEdit: () => void;
  onDelete: () => void;
}

export default function ModuleCard({
  module,
  lessonCount = 0,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-white">

        <div className="flex justify-between">

          <div>

            <p className="text-sm opacity-80">
              Module {module.order}
            </p>

            <h2 className="mt-2 text-2xl font-bold">

              {module.title}

            </h2>

          </div>

          <FolderOpen size={42} />

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <p className="text-slate-600 line-clamp-3">

          {module.description || "No description provided."}

        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-slate-50 p-4">

            <div className="flex items-center gap-2">

              <PlayCircle className="text-green-600" size={20} />

              <span className="font-semibold">

                {lessonCount}

              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">

              Lessons

            </p>

          </div>

          <div className="rounded-xl bg-slate-50 p-4">

            {module.isPublished ? (

              <>

                <CheckCircle
                  className="text-green-600"
                  size={20}
                />

                <p className="mt-2 text-sm font-medium text-green-700">

                  Published

                </p>

              </>

            ) : (

              <>

                <Clock
                  className="text-yellow-500"
                  size={20}
                />

                <p className="mt-2 text-sm font-medium text-yellow-700">

                  Draft

                </p>

              </>

            )}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t px-6 py-4 flex justify-between items-center">

        <Link
          href={`/admin/modules/${module.course}/${module._id}/lessons`}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
        >
          Manage Lessons

          <ArrowRight size={18} />
        </Link>

        <ModuleActions
          module={module}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      </div>

    </div>
  );
}