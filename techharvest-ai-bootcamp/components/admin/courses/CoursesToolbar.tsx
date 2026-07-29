"use client";

import {
  Search,
  RotateCcw,
} from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function CoursesToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

      <div className="flex flex-col lg:flex-row gap-4">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search courses..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 outline-none"
          />

        </div>

        {/* Status */}

        <select className="rounded-xl border border-slate-300 px-4 py-3">

          <option>All Status</option>

          <option>Published</option>

          <option>Draft</option>

          <option>Archived</option>

        </select>

        {/* Level */}

        <select className="rounded-xl border border-slate-300 px-4 py-3">

          <option>All Levels</option>

          <option>Beginner</option>

          <option>Intermediate</option>

          <option>Advanced</option>

        </select>

        <button className="rounded-xl border border-slate-300 px-5 py-3 flex items-center gap-2 hover:bg-slate-100">

          <RotateCcw size={18} />

          Reset

        </button>

      </div>

    </div>
  );
}