"use client";

import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import FadeIn from "./../FadeIn";

const stats = [
  {
    icon: Bot,
    number: "500M+",
    title: "AI Users",
    description:
      "Millions of people now use AI daily to improve productivity.",
  },
  {
    icon: BriefcaseBusiness,
    number: "80%",
    title: "Future Jobs",
    description:
      "Most careers will require AI skills in the coming years.",
  },
  {
    icon: GraduationCap,
    number: "4 Weeks",
    title: "Bootcamp",
    description:
      "Learn practical AI skills through live hands-on classes.",
  },
  {
    icon: BrainCircuit,
    number: "100%",
    title: "Practical",
    description:
      "Every lesson is focused on solving real-world problems.",
  },
];

export default function Stats() {
  return (
    <FadeIn>
      <section className="bg-slate-950 py-16 md:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* Heading */}

          <div className="text-center mb-12 md:mb-16">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              AI is Changing Everything
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-400">
              The future belongs to people who know how to work with Artificial
              Intelligence—not those who ignore it.
            </p>

          </div>

          {/* Cards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#0E1A33]
                  rounded-2xl
                  p-6
                  sm:p-7
                  lg:p-8
                  border
                  border-slate-700
                  hover:border-green-500
                  transition
                  duration-300
                  hover:-translate-y-2
                "
              >
                <item.icon
                  className="text-green-500 mb-4"
                  size={42}
                />

                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl sm:text-2xl font-bold text-green-400">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
    </FadeIn>
  );
}