"use client";

import { KnowledgeDocument } from "@/types/knowledge";
import { X, Calendar, Tag, Database, FileText } from "lucide-react";

interface Props {
  open: boolean;
  document: KnowledgeDocument | null;
  onClose: () => void;
}

export default function KnowledgeDetailsDrawer({
  open,
  document,
  onClose,
}: Props) {
  if (!open || !document) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto">

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Knowledge Details
            </h2>

            <p className="text-slate-500 mt-1">
              View uploaded knowledge information
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>

        </div>

        <div className="p-8 space-y-8">

          <div>

            <label className="text-sm text-slate-500">
              Title
            </label>

            <h3 className="mt-2 text-2xl font-bold">
              {document.title}
            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-sm text-slate-500">
                Category
              </label>

              <div className="mt-2 rounded-xl bg-blue-100 text-blue-700 inline-flex px-4 py-2">
                {document.category}
              </div>

            </div>

            <div>

              <label className="text-sm text-slate-500">
                Source
              </label>

              <div className="mt-2 rounded-xl bg-green-100 text-green-700 inline-flex px-4 py-2">
                {document.source}
              </div>

            </div>

          </div>

          <div>

            <label className="text-sm text-slate-500">
              Description
            </label>

            <div className="mt-2 rounded-xl border p-4 text-slate-700">
              {document.description || "No description available."}
            </div>

          </div>

          <div>

            <label className="text-sm text-slate-500">
              Tags
            </label>

            <div className="mt-3 flex flex-wrap gap-2">

              {document.tags.length ? (
                document.tags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-slate-400">
                  No tags
                </span>
              )}

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-xl border p-5">

              <div className="flex items-center gap-3">

                <Calendar className="text-green-600" />

                <div>

                  <p className="text-sm text-slate-500">
                    Created
                  </p>

                  <p className="font-semibold">
                    {new Date(document.created_at).toLocaleString()}
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-xl border p-5">

              <div className="flex items-center gap-3">

                <Calendar className="text-blue-600" />

                <div>

                  <p className="text-sm text-slate-500">
                    Updated
                  </p>

                  <p className="font-semibold">
                    {new Date(document.updated_at).toLocaleString()}
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div>

            <label className="text-sm text-slate-500">
              Metadata
            </label>

            <div className="mt-3 rounded-xl border bg-slate-50 p-5 overflow-auto">

              <pre className="text-sm whitespace-pre-wrap">
                {JSON.stringify(document.metadata, null, 2)}
              </pre>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}