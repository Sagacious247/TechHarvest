"use client";

import {
  BookOpen,
  Database,
  MessageSquare,
  Bot,
} from "lucide-react";

import { useKnowledge } from "@/hooks/useKnowledge";

// const stats = [

// {
//     title: "Knowledge",
//     value: "0",
//     icon: BookOpen,
// },

// {
//     title: "Chunks",
//     value: "0",
//     icon: Database,
// },

// {
//     title: "Conversations",
//     value: "0",
//     icon: MessageSquare,
// },

// {
//     title: "AI Agents",
//     value: "1",
//     icon: Bot,
// },

// ];


export default function AIStats() {

  const { stats } = useKnowledge();

  const cards = [
    {
      title: "Knowledge",
      value: stats.knowledge,
      icon: BookOpen,
    },
    {
      title: "Chunks",
      value: stats.chunks,
      icon: Database,
    },
    {
      title: "Conversations",
      value: stats.conversations,
      icon: MessageSquare,
    },
    {
      title: "AI Agents",
      value: stats.agents,
      icon: Bot,
    },
  ];

return (

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

{/* {stats.map((item) => { */}
{cards.map((item) => {

const Icon = item.icon;

return (

<div
key={item.title}
className="rounded-2xl bg-white border shadow-sm p-6 hover:shadow-lg transition"
>

<div className="flex justify-between">

<div>

<p className="text-sm text-slate-500">

{item.title}

</p>

<h2 className="text-4xl font-bold mt-2">

{item.value}

</h2>

</div>

<div className="bg-green-100 rounded-xl p-4">

<Icon
className="text-green-600"
size={26}
/>

</div>

</div>

</div>

);
})}


{/* })} */}

</div>

);

}