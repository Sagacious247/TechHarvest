"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <Sparkles
          size={60}
          className="mx-auto text-white mb-6"
        />

        <h2 className="text-5xl font-black text-white">
          The Future Will Not Wait.
        </h2>

        <h3 className="text-4xl font-bold text-white mt-4">
          Neither Should You.
        </h3>

        <p className="text-xl text-green-100 mt-8 leading-9 max-w-3xl mx-auto">
          Artificial Intelligence is becoming part of every profession.
          The people who learn it today will have a significant advantage tomorrow.
          Join the TechHarvest AI Accelerator Bootcamp and start building the future you deserve.
        </p>

        <button
          className="mt-12 bg-white text-green-700 hover:bg-slate-100 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3"
        >
          Reserve My Seat Today

          <ArrowRight size={20} />
        </button>

      </div>

    </section>
  );
}