"use client";

import { Download } from "lucide-react";
interface Props {
  receipt: any;
}

export default function ReceiptButton({
  receipt,
}: Props) {

  if (!receipt?.url) {
    return (
      <span className="text-slate-400">
        —
      </span>
    );

  }

  return (

    <a
      href={receipt.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white"
    >
      <Download size={16} />
      Receipt
    </a>

  );

}