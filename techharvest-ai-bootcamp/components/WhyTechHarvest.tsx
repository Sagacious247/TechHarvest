"use client";

import {
  Brain,
  Laptop,
  Users,
  Award,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: Brain,
    title: "Learn AI the Practical Way",
    description:
      "Forget theory without application. Every lesson is designed around solving real-world problems with AI.",
  },
  {
    icon: Laptop,
    title: "Build Real Projects",
    description:
      "You'll create prompts, documents, presentations, research systems, business workflows, and productivity tools.",
  },
  {
    icon: Users,
    title: "Live Interactive Classes",
    description:
      "Ask questions, participate in discussions, and learn alongside other ambitious students in live Zoom sessions.",
  },
  {
    icon: Award,
    title: "Career & Business Ready",
    description:
      "Gain AI skills that improve your studies, career, freelancing opportunities, and business productivity.",
  },
  {
    icon: BookOpen,
    title: "Lifetime Learning Mindset",
    description:
      "Technology evolves rapidly. We'll teach you how to keep learning long after the bootcamp ends.",
  },
];

export default function WhyTechHarvest() {
  return (
    <FadeIn>
     <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-400 font-semibold uppercase tracking-widest">
            WHY TECHHARVEST?
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            We Don't Just Teach AI.
            <br />
            We Teach You How To Think With AI.
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto mt-8">
            Our mission is to help students, professionals,
            entrepreneurs and young innovators confidently use
            Artificial Intelligence to study smarter,
            work faster and build meaningful solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#10203F] rounded-3xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-3"
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

              <button className="mt-8 flex items-center gap-2 text-green-400 font-semibold">
                Learn More
                <ArrowRight size={18}/>
              </button>

            </div>
          ))}

        </div>

      </div>

    {/* </section> */}
   </section>
 </FadeIn>
  );
}