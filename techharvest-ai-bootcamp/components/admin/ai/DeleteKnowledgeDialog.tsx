"use client";

interface Props {
  open: boolean;
  title?: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteKnowledgeDialog({
  open,
  title,
  loading,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-slate-900">
          Delete Knowledge
        </h2>

        <p className="mt-4 text-slate-600 leading-7">
          Are you sure you want to permanently delete
          <span className="font-semibold">
            {" "}
            {title}
          </span>
          ?
        </p>

        <p className="mt-2 text-sm text-red-600">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}