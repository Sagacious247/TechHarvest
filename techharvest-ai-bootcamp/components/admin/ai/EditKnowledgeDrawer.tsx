"use client";

import { X } from "lucide-react";
import { KnowledgeDocument } from "@/types/knowledge";
import KnowledgeForm from "./KnowledgeForm";

interface Props {
  open: boolean;
  document: KnowledgeDocument | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditKnowledgeDrawer({
  open,
  document,
  onClose,
  onSuccess,
}: Props) {
  if (!open || !document) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">

        <div className="flex items-center justify-between border-b px-8 py-6">
          <h2 className="text-2xl font-bold">
            Edit Knowledge
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-8">
          <KnowledgeForm
            initialData={document}
            mode="edit"
            onSuccess={() => {
              onSuccess();
              onClose();
            }}
          />
        </div>

      </div>
    </>
  );
}