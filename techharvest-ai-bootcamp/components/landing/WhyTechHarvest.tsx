"use client";

import {
  Brain,
  Laptop,
  Users,
  Award,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import FadeIn from "./../FadeIn";

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
     {/* <section className="bg-slate-950 py-24"> */}
     <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
            WHY TECHHARVEST?
          </span>

          <h2 className="mt-3 sm:mt-4 text-4xl sm:text-5xl lg:text-5xl font-black leading-tight text-white max-w-5xl mx-auto">
            We Don't Just Teach AI.
            <br />
            We Teach You How To Think With AI.
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-400 max-w-3xl mx-auto">
            Our mission is to help students, professionals,
            entrepreneurs and young innovators confidently use
            Artificial Intelligence to study smarter,
            work faster and build meaningful solutions.
          </p>

        </div>

        <div className="grid gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#10203F] rounded-3xl p-6 sm:p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 lg:hover:-translate-y-3"
            >
              <item.icon
                size={40}
                className="text-green-500 lg:w-12 lg:h-12"
              />

              <h3 className="mt-5 text-xl sm:text-2xl font-bold leading-snug text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
                {item.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 text-sm sm:text-base text-green-400 font-semibold hover:gap-3 transition-all">
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