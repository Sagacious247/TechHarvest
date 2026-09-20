"use client";
import { useState } from "react";

import AIHeader from "@/components/admin/ai/AIHeader";
import AIStats from "@/components/admin/ai/AIStats";
import KnowledgeToolbar from "@/components/admin/ai/KnowledgeToolbar";
import KnowledgeTable from "@/components/admin/ai/KnowledgeTable";

export default function AIStudioPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

return (

<div className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl space-y-8 p-8">

        <AIHeader />

        <AIStats />

        <KnowledgeToolbar
  search={search}
  onSearchChange={setSearch}

  category={category}
  onCategoryChange={setCategory}
/>

        <KnowledgeTable
  search={search}
  category={category}
/>

      </div>

    </div>

);

}