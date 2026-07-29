"use client";

import Link from "next/link";

import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Sparkles,
} from "lucide-react";

import FadeIn from "../FadeIn";
import transformation from "@/data/transformation";

export default function Transformation() {
  return (
    <FadeIn>
      <section className="bg-slate-950 py-16 md:py-20 lg:py-28" id="success">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.25em] text-green-400 font-semibold">

              YOUR TRANSFORMATION

            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">

              {transformation.title}

            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-400">

              {transformation.subtitle}

            </p>

          </div>

          {/* BEFORE & AFTER */}

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mt-14 lg:mt-20">

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-slate-900 to-[#081426] p-6 sm:p-8 lg:p-10">

              <h3 className="text-3xl font-bold text-red-400">

                Before TechHarvest

              </h3>

              <div className="mt-10 space-y-5">

                {transformation.before.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <XCircle
                      className="text-red-400"
                      size={22}
                    />

                    <span className="text-sm sm:text-base text-slate-300 leading-7">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-green-500/30 bg-gradient-to-br from-slate-900 to-[#081426] p-10">

              <h3 className="text-2xl sm:text-3xl font-bold text-green-400">

                After TechHarvest

              </h3>

              <div className="mt-10 space-y-5">

                {transformation.after.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle
                      className="text-green-400"
                      size={22}
                    />

                    <span className="text-slate-200">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* TIMELINE */}

          <div className="mt-16 lg:mt-24">

            <h3 className="text-center text-3xl sm:text-4xl font-black text-white">

              Your 4-Week Journey

            </h3>

            <div className="grid gap-6 lg:gap-8 mt-10 lg:mt-14 md:grid-cols-2 lg:grid-cols-4">

              {transformation.timeline.map((step) => (

                <div
                  key={step.week}
                  className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 text-center hover:border-green-500 transition"
                >

                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500">

                    <Sparkles className="text-white" />

                  </div>

                  <p className="mt-6 text-green-400 font-semibold">

                    {step.week}

                  </p>

                  <h4 className="mt-3 text-xl sm:text-2xl font-bold text-white">

                    {step.title}

                  </h4>

                  <p className="mt-4 text-sm sm:text-base text-slate-400 leading-7">

                    {step.description}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* SKILLS */}

          <div className="mt-16 lg:mt-24">

            <h3 className="text-center text-3xl sm:text-4xl font-black text-white">

              You'll Master

            </h3>

            <div className="grid gap-4 sm:gap-5 mt-8 lg:mt-12 sm:grid-cols-2 lg:grid-cols-4">

              {transformation.skills.map((skill) => (

                <div
                  key={skill}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-4 sm:p-5 text-center text-sm sm:text-base font-semibold text-white hover:border-green-500 transition"
                >

                  {skill}

                </div>

              ))}

            </div>

          </div>

          {/* QUOTE */}

          <div className="mt-16 lg:mt-24 rounded-3xl border border-green-500/20 bg-green-500/10 p-6 sm:p-8 lg:p-12 text-center">

            <blockquote className="text-xl sm:text-2xl lg:text-3xl italic font-medium text-white leading-relaxed">

              "{transformation.quote}"

            </blockquote>

            <p className="mt-8 text-green-400 font-bold">

              — {transformation.author}

            </p>

          </div>

          {/* CTA */}

          <div className="mt-16 lg:mt-20 text-center">

            <h3 className="text-3xl sm:text-4xl font-black text-white">

              {transformation.cta.title}

            </h3>

            <Link
              href={transformation.cta.href}
              className="inline-flex mt-8 lg:mt-10 w-full sm:w-auto justify-center items-center gap-3 rounded-2xl bg-green-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white transition hover:bg-green-600"
            >

              {transformation.cta.button}

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}