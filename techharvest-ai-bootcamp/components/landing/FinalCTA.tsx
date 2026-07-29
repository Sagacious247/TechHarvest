// "use client";

// import { ArrowRight, Sparkles } from "lucide-react";

// export default function FinalCTA() {
//   return (
//     <section className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 py-24">

//       <div className="max-w-5xl mx-auto px-6 text-center">

//         <Sparkles
//           size={60}
//           className="mx-auto text-white mb-6"
//         />

//         <h2 className="text-5xl font-black text-white">
//           The Future Will Not Wait.
//         </h2>

//         <h3 className="text-4xl font-bold text-white mt-4">
//           Neither Should You.
//         </h3>

//         <p className="text-xl text-green-100 mt-8 leading-9 max-w-3xl mx-auto">
//           Artificial Intelligence is becoming part of every profession.
//           The people who learn it today will have a significant advantage tomorrow.
//           Join the TechHarvest AI Accelerator Bootcamp and start building the future you deserve.
//         </p>

//         <button
//           className="mt-12 bg-white text-green-700 hover:bg-slate-100 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3"
//         >
//           Reserve My Seat Today

//           <ArrowRight size={20} />
//         </button>

//       </div>

//     </section>
//   );
// }



"use client";

import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle,
} from "lucide-react";

import FadeIn from "../FadeIn";

import finalCTA from "@/data/finalCta";

export default function FinalCTA() {
  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-slate-950 py-32">

        {/* Background Glow */}

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[140px]" />

        <div className="relative max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] border border-green-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 p-14 shadow-[0_30px_80px_rgba(34,197,94,.15)]">

            <div className="text-center">

              <span className="inline-flex rounded-full border border-green-500/40 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">

                {finalCTA.badge}

              </span>

              <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

                {finalCTA.title}

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

                {finalCTA.subtitle}

              </p>

            </div>

            {/* Benefits */}

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {finalCTA.benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-5"
                >

                  <CheckCircle
                    className="text-green-400"
                    size={20}
                  />

                  <span className="font-medium text-white">

                    {benefit}

                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href={finalCTA.primaryButton.href}
                className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-10 py-5 text-lg font-bold text-white transition hover:bg-green-600"
              >

                {finalCTA.primaryButton.text}

                <ArrowRight size={20} />

              </Link>

              <Link
                href={finalCTA.secondaryButton.href}
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-600 px-10 py-5 text-lg font-bold text-white transition hover:border-green-500 hover:bg-slate-900"
              >

                <BookOpen size={20} />

                {finalCTA.secondaryButton.text}

              </Link>

            </div>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}