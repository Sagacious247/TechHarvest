"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  width?: string;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
  width = "max-w-4xl",
}: ModalProps) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">

      <div
        className={`bg-white rounded-2xl shadow-2xl w-full ${width}
        max-h-[95vh] overflow-hidden flex flex-col`}
      >

        {/* Header */}

        <div className="flex items-center justify-between px-8 py-5 bg-green-600 text-white">

          <h2 className="text-xl font-bold">

            {title}

          </h2>

          <button
            onClick={onClose}
            className="hover:opacity-80"
          >
            <X size={22}/>
          </button>

        </div>

        {/* Scrollable Body */}

        <div className="flex-1 overflow-y-auto">

          {children}

        </div>

      </div>

    </div>

  );

}