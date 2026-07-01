"use client";

import {
  GraduationCap,
  Briefcase,
  Laptop,
  Lightbulb,
  PenSquare,
  Building2,
  ArrowRight,
} from "lucide-react";

const audience = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Study smarter, complete assignments faster, and improve your research skills using AI.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description:
      "Increase productivity, automate repetitive tasks, and stay relevant in the AI era.",
  },
  {
    icon: Building2,
    title: "Business Owners",
    description:
      "Use AI to improve customer service, marketing, content creation, and business growth.",
  },
  {
    icon: Laptop,
    title: "Software Developers",
    description:
      "Write better code, debug faster, and accelerate software development with AI tools.",
  },
  {
    icon: PenSquare,
    title: "Content Creators",
    description:
      "Create high-quality content, scripts, captions, blogs, and marketing materials in less time.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    description:
      "Build smarter businesses, generate new ideas, and leverage AI as your competitive advantage.",
  },
];

export default function WhoShouldAttend() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-green-400 font-bold">
            WHO SHOULD ATTEND?
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            This Bootcamp Was Designed For You
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto mt-8">
            Whether you're just getting started or already using technology,
            this bootcamp will equip you with practical AI skills that make a
            real difference.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {audience.map((item, index) => (

            <div
              key={index}
              className="bg-[#10203F] rounded-3xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2"
            >

              <item.icon
                size={48}
                className="text-green-500"
              />

              <h3 className="text-white text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <button className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 transition-all px-10 py-4 rounded-xl text-white font-bold">

            Yes, This Bootcamp Is For Me

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </section>
  );
}