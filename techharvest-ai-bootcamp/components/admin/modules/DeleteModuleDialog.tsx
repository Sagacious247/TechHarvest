"use client";

interface DeleteModuleDialogProps {
  open: boolean;
  moduleTitle: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModuleDialog({
  open,
  moduleTitle,
  loading = false,
  onClose,
  onConfirm,
}: DeleteModuleDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-red-600">
            Delete Module
          </h2>
        </div>

        <div className="px-6 py-5">
          <p className="text-gray-700">
            Are you sure you want to delete
          </p>

          <p className="mt-2 font-semibold">
            "{moduleTitle}"
          </p>

          <p className="mt-4 text-sm text-red-500">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-4">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>
    </div>
  );
}