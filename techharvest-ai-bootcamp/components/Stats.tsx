"use client";

import { Bot, BrainCircuit, BriefcaseBusiness, GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  {
    icon: Bot,
    number: "500M+",
    title: "AI Users",
    description: "Millions of people now use AI daily to improve productivity.",
  },
  {
    icon: BriefcaseBusiness,
    number: "80%",
    title: "Future Jobs",
    description: "Most careers will require AI skills in the coming years.",
  },
  {
    icon: GraduationCap,
    number: "4 Weeks",
    title: "Bootcamp",
    description: "Learn practical AI skills through live hands-on classes.",
  },
  {
    icon: BrainCircuit,
    number: "100%",
    title: "Practical",
    description: "Every lesson is focused on solving real-world problems.",
  },
];

export default function Stats() {
  return (
     <FadeIn>
     <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            AI is Changing Everything
          </h2>

          <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
            The future belongs to people who know how to work with Artificial
            Intelligence—not those who ignore it.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#0E1A33] rounded-2xl p-8 border border-slate-700 hover:border-green-500 transition duration-300 hover:-translate-y-2"
            >
              <item.icon
                className="text-green-500 mb-5"
                size={50}
              />

              <h3 className="text-4xl font-black text-white">
                {item.number}
              </h3>

              <h4 className="text-green-400 text-xl font-bold mt-3">
                {item.title}
              </h4>

              <p className="text-gray-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    {/* </section> */}
</section>
</FadeIn>
  );
}