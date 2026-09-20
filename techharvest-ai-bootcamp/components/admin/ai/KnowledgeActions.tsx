"use client";

import { MoreVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function KnowledgeActions({
  onView,
  onEdit,
  onDelete,
}: Props) {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 hover:bg-slate-100"
      >
        <MoreVertical size={18} />
      </button>

      {open && (

        <div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white shadow-lg z-50">

          <button
            onClick={onView}
            className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50"
          >
            <Eye size={16} />
            View
          </button>

          <button
            onClick={onEdit}
            className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={onDelete}
            className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
          >
            <Trash2 size={16} />
            Delete
          </button>

        </div>

      )}

    </div>
  );
}