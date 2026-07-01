"use client";

import { CheckCircle, Gift, Clock } from "lucide-react";
import FadeIn from "./FadeIn";

const bonuses = [
  "Prompt Engineering Playbook (PDF)",
  "AI Productivity Toolkit",
  "Lifetime Access to Bootcamp Materials",
  "Certificate of Completion",
  "Exclusive TechHarvest Community",
  "Free Updates for Future AI Sessions",
];

export default function Pricing() {
  return (
    <FadeIn>
     <section className="bg-slate-950 py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="text-green-400 uppercase tracking-widest font-bold">
          LIMITED TIME OFFER
        </span>

        <h2 className="text-5xl font-black text-white mt-5">
          Invest In Your Future Today
        </h2>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
          Artificial Intelligence is transforming every industry.
          The best time to learn was yesterday.
          The next best time is today.
        </p>

        <div className="mt-16 bg-[#10203F] rounded-3xl border border-green-500 shadow-2xl p-10">

          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full font-bold">

            <Clock size={18} />

            EARLY BIRD OFFER

          </div>

          <h3 className="text-white text-6xl font-black mt-8">

            ₦20,000

          </h3>

          <p className="text-gray-400 mt-3 line-through text-2xl">

            Regular Price ₦30,000

          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-12 text-left">

            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  className="text-green-500"
                />

                <span className="text-gray-300">
                  {bonus}
                </span>

              </div>
            ))}

          </div>

          <button className="mt-12 bg-green-500 hover:bg-green-600 transition px-12 py-5 rounded-2xl text-white text-xl font-bold">

            Reserve My Seat Now

          </button>

          <p className="text-gray-500 mt-6">
            Secure your seat before the Early Bird offer ends.
          </p>

        </div>

      </div>

    </section>
  </FadeIn>
  );
}