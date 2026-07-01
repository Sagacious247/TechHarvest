"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const transformations = [
  {
    before: "Spending hours searching for information.",
    after: "Researching smarter with AI in minutes.",
  },
  {
    before: "Writing assignments from scratch.",
    after: "Creating better assignments with AI assistance.",
  },
  {
    before: "Feeling left behind by technology.",
    after: "Using AI confidently for school, work and business.",
  },
  {
    before: "Struggling with productivity.",
    after: "Completing tasks faster using AI workflows.",
  },
  {
    before: "Depending only on one source of income.",
    after: "Learning AI skills that open new opportunities.",
  },
  {
    before: "Being afraid of Artificial Intelligence.",
    after: "Making AI your competitive advantage.",
  },
];

export default function Transformation() {
  return (
    <FadeIn>
     <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-400 uppercase tracking-widest font-bold">
            YOUR TRANSFORMATION
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            Imagine Where You'll Be
            <br />
            Four Weeks From Today
          </h2>

          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">
            This bootcamp isn't just about learning AI.
            It's about becoming a smarter student,
            more productive professional and confident problem solver.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {transformations.map((item, index) => (

            <div
              key={index}
              className="bg-[#10203F] rounded-3xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300"
            >

              <p className="text-red-400 line-through">
                {item.before}
              </p>

              <div className="flex justify-center my-5">
                <ArrowRight
                  className="text-green-500"
                  size={30}
                />
              </div>

              <p className="text-green-400 font-bold text-lg">
                {item.after}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  </FadeIn>
  );
}