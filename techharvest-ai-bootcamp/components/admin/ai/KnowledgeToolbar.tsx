"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;
}

export default function KnowledgeToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: Props) {

  return (
    <>
      <div className="bg-white rounded-2xl border p-5 flex flex-col lg:flex-row gap-4 justify-between">

        <div className="relative w-full lg:w-96">
          <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-400"
          />

          <input
           value={search}
           onChange={(e) => onSearchChange(e.target.value)}
           placeholder="Search knowledge..."
           className="w-full rounded-xl border pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
         />
        </div>

        <div className="flex gap-3">

          <div className="flex items-center gap-2 rounded-xl border px-4 py-2">

  <Filter size={18} />

  <select
    value={category}
    onChange={(e) => onCategoryChange(e.target.value)}
    className="bg-transparent outline-none"
  >
    <option value="">All Categories</option>
    <option value="AI">AI</option>
    <option value="faq">FAQ</option>
    <option value="pdf">PDF</option>
    <option value="manual">Manual</option>
  </select>

</div>

        </div>

      </div>

    </>
  );
}