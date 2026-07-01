"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <button
      className="
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      rounded-xl
      bg-green-500
      hover:bg-green-600
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]
      font-bold
      text-white
      "
    >
      {children}

      <ArrowRight size={20} />
    </button>
  );
}