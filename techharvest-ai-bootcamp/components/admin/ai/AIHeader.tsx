"use client";

import { useState } from "react";
import {
  BrainCircuit,
  FileText,
  Upload,
  Sparkles,
} from "lucide-react";

import AIStatusBadge from "./AIStatusBadge";
import NewKnowledgeDrawer from "./NewKnowledgeDrawer";
import UploadPDFModal from "./UploadPDFModal";
import Link from "next/link";

export default function AIHeader() {
  const [open, setOpen] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <>
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-green-700 text-white p-8 shadow-xl">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="flex items-center gap-3">

              <BrainCircuit className="h-9 w-9 text-green-300" />

              <h1 className="text-4xl font-bold">

                AI Studio

              </h1>

            </div>

            <p className="mt-4 max-w-2xl text-slate-200 leading-7">

              Manage your AI knowledge base, intelligent assistants,
              business automation, document ingestion,
              and enterprise AI workflows from one place.

            </p>

          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">

            <AIStatusBadge />

            <div className="flex flex-wrap gap-3">

              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-6 py-3 font-semibold transition"
              >
                <FileText size={18} />

                New Knowledge
              </button>

              <button
  onClick={() => setOpenUpload(true)}
  className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 transition"
>
  <Upload size={18} />
  Upload PDF
</button>

              {/* <button
                className="flex items-center gap-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 font-semibold transition"
              >
                <Sparkles size={18} />

                Playground
              </button> */}

<Link href="/admin/ai/playground">
  <button className="flex items-center gap-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 font-semibold transition">
    <Sparkles size={18} />
    Playground
  </button>
</Link>

            </div>

          </div>

        </div>

      </div>

      <NewKnowledgeDrawer
        open={open}
        onClose={() => setOpen(false)}
      />

      <UploadPDFModal
  open={openUpload}
  onClose={() => setOpenUpload(false)}
/>

    </>
  );
}