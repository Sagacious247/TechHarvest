"use client";

import { Eye } from "lucide-react";

interface Props {
  onView: () => void;
}

export default function CertificateActions({
  onView,
}: Props) {
  return (
    <button
      onClick={onView}
      className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
    >
      <Eye className="h-4 w-4" />
    </button>
  );
}