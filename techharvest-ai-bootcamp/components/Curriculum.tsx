"use client";

import {
  Bot,
  Search,
  FileText,
  Presentation,
  Briefcase,
  Rocket,
  CheckCircle,
} from "lucide-react";
import FadeIn from "./FadeIn";

const modules = [
  {
    icon: Bot,
    week: "Week 1",
    title: "Mastering ChatGPT Foundations",
    topics: [
      "Understanding AI & ChatGPT",
      "Prompt Engineering Fundamentals",
      "ChatGPT for Daily Productivity",
      "Writing Better Prompts",
    ],
  },
  {
    icon: Search,
    week: "Week 2",
    title: "Research & Content Creation",
    topics: [
      "AI Research Techniques",
      "Creating Articles",
      "Social Media Content",
      "Academic & Business Research",
    ],
  },
  {
    icon: FileText,
    week: "Week 3",
    title: "Documents & Presentations",
    topics: [
      "Professional Documents",
      "CV & Cover Letters",
      "PowerPoint Creation",
      "Business Proposals",
    ],
  },
  {
    icon: Briefcase,
    week: "Week 4",
    title: "AI for Career & Business",
    topics: [
      "Freelancing with AI",
      "Business Automation",
      "AI Productivity Systems",
      "Monetizing AI Skills",
    ],
  },
];

export default function Curriculum() {
  return (
    <FadeIn>
     <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-400 uppercase tracking-widest font-bold">
            BOOTCAMP CURRICULUM
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            What You'll Learn In 4 Weeks
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Every week is practical, live, and project-based.
            You'll leave with skills you can immediately apply to your
            studies, career, business, and everyday work.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-[#10203F] rounded-3xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300"
            >
              <module.icon
                size={48}
                className="text-green-500"
              />

              <p className="text-green-400 mt-6 font-bold">
                {module.week}
              </p>

              <h3 className="text-white text-3xl font-bold mt-2">
                {module.title}
              </h3>

              <div className="mt-8 space-y-4">

                {module.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-500"
                    />

                    <span className="text-gray-300">
                      {topic}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="mt-20 text-center">

          <button className="bg-green-500 hover:bg-green-600 duration-300 px-10 py-5 rounded-2xl text-white font-bold text-lg flex items-center gap-3 mx-auto">

            <Rocket />

            Reserve My Seat Now

          </button>

        </div>

      </div>
    </section>
  </FadeIn>
  );
}