"use client";

import { X, Calendar, Tag, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { KnowledgeDocument } from "@/types/knowledge";

interface Props {
  open: boolean;
  mode: "view" | "edit" | "create";
  document: KnowledgeDocument | null;
  onClose: () => void;
  onSave?: (data: Partial<KnowledgeDocument>) => Promise<void>;
}

export default function KnowledgeDrawer({
  open,
  mode,
  document,
  onClose,
  onSave,
}: Props) {

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    tags: "",
  });

  useEffect(() => {

    if (!document) return;

    setForm({
      title: document.title ?? "",
      category: document.category ?? "",
      description: document.description ?? "",
      tags: document.tags.join(", "),
    });

  }, [document]);

  if (!open) return null;

  const readOnly = mode === "view";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">

  <div>

    <h2 className="text-2xl font-bold">

      {mode === "view" && "Knowledge Details"}

      {mode === "edit" && "Edit Knowledge"}

      {mode === "create" && "Create Knowledge"}

    </h2>

    <p className="text-slate-500 mt-1">

      Manage your AI Knowledge Base

    </p>

  </div>

  <button
    onClick={onClose}
    className="rounded-lg p-2 hover:bg-slate-100"
  >
    <X />
  </button>

</div>

        {/* Body */}
        <div className="space-y-8 p-8">

  <div>

    <label className="text-sm text-slate-500">

      Title

    </label>

    <input
      value={form.title}
      readOnly={readOnly}
      onChange={(e) =>
        setForm({
          ...form,
          title: e.target.value,
        })
      }
      className="mt-2 w-full rounded-xl border p-3"
    />

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <div>

      <label className="text-sm text-slate-500">

        Category

      </label>

      <input
        value={form.category}
        readOnly={readOnly}
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value,
          })
        }
        className="mt-2 w-full rounded-xl border p-3"
      />

    </div>

    <div>

      <label className="text-sm text-slate-500">

        Tags

      </label>

      <input
        value={form.tags}
        readOnly={readOnly}
        onChange={(e) =>
          setForm({
            ...form,
            tags: e.target.value,
          })
        }
        className="mt-2 w-full rounded-xl border p-3"
      />

    </div>

  </div>

  <div>

    <label className="text-sm text-slate-500">

      Description

    </label>

    <textarea
      rows={6}
      value={form.description}
      readOnly={readOnly}
      onChange={(e) =>
        setForm({
          ...form,
          description: e.target.value,
        })
      }
      className="mt-2 w-full rounded-xl border p-3"
    />

  </div>

  {document && (

    <div className="grid md:grid-cols-2 gap-5">

      <div className="rounded-xl border p-4">

        <Calendar className="text-green-600 mb-2" />

        <p className="text-sm text-slate-500">

          Created

        </p>

        <p className="font-semibold">

          {new Date(document.created_at).toLocaleString()}

        </p>

      </div>

      <div className="rounded-xl border p-4">

        <Calendar className="text-blue-600 mb-2" />

        <p className="text-sm text-slate-500">

          Updated

        </p>

        <p className="font-semibold">

          {new Date(document.updated_at).toLocaleString()}

        </p>

      </div>

    </div>

  )}

</div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t bg-white px-8 py-5 flex justify-end gap-3">

  <button
    onClick={onClose}
    className="rounded-xl border px-6 py-3"
  >
    Close
  </button>

  {mode !== "view" && (

    <button
      onClick={async () => {

        if (!onSave) return;

        await onSave({

          title: form.title,

          category: form.category,

          description: form.description,

          tags: form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),

        });

      }}
      className="rounded-xl bg-green-600 text-white px-6 py-3 flex items-center gap-2"
    >
      <Save size={18} />

      Save Changes

    </button>

  )}

</div>

      </div>
    </>
  );
}