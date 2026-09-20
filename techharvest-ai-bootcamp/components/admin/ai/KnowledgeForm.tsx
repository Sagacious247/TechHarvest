"use client";

import { useState } from "react";
import { createKnowledge } from "@/services/knowledge.service";

import { KnowledgeDocument } from "@/types/knowledge";
import { updateKnowledge } from "@/services/knowledge.service";

interface Props {
  mode?: "create" | "edit";
  initialData?: Partial<KnowledgeDocument>;
  onSuccess?: () => void;
}

export default function KnowledgeForm({
  mode = "create",
  initialData,
  onSuccess,
}: Props) {
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
  title: initialData?.title ?? "",
  category: initialData?.category ?? "",
  source: initialData?.source ?? "manual",
  tags: initialData?.tags?.join(", ") ?? "",
  description:
    initialData?.description ??
    initialData?.metadata?.description ??
    "",
});

 async function submit() {
  try {
    setSaving(true);

    const payload = {
      tenantId: "techharvest",
      title: form.title,
      category: form.category,
      source: form.source,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      metadata: {
        description: form.description,
      },
    };

    if (
      mode === "edit" &&
      initialData?.id
    ) {
      await updateKnowledge(
        initialData.id,
        payload
      );
    } else {
      await createKnowledge(payload);
    }

    onSuccess?.();

    if (mode === "create") {
      setForm({
        title: "",
        category: "",
        source: "manual",
        tags: "",
        description: "",
      });
    }

  } finally {
    setSaving(false);
  }
}

  return (
    <div className="space-y-6">

      <input
        placeholder="Knowledge Title"
        className="w-full rounded-xl border p-3"
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
      />

      <input
        placeholder="Category"
        className="w-full rounded-xl border p-3"
        value={form.category}
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value,
          })
        }
      />

      <textarea
        rows={6}
        placeholder="Description"
        className="w-full rounded-xl border p-3"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <input
        placeholder="admission, payment, faq"
        className="w-full rounded-xl border p-3"
        value={form.tags}
        onChange={(e) =>
          setForm({
            ...form,
            tags: e.target.value,
          })
        }
      />

      <button
        onClick={submit}
        disabled={saving}
        className="rounded-xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700"
      >
        {saving
  ? "Saving..."
  : mode === "edit"
  ? "Update Knowledge"
  : "Save Knowledge"}
      </button>

    </div>
  );
}