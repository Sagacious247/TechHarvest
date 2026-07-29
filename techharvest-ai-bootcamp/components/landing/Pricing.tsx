"use client";

import Link from "next/link";

import {
  CheckCircle,
  Clock3,
  ShieldCheck,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

import FadeIn from "../FadeIn";
import { bootcamp } from "@/data/bootcamp";

export default function Pricing() {
  return (
    <FadeIn>
      <section
        id="pricing"
        className="bg-slate-950 py-16 md:py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* Section Header */}

          <div className="text-center">

            <span className="inline-block uppercase tracking-[0.2em] md:tracking-[0.25em] text-green-400 font-semibold text-xs sm:text-sm">
              ENROLLMENT NOW OPEN
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              Invest In Skills That Will Pay You For Years
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-400">
              Learn practical Artificial Intelligence skills that help you
              work faster, earn more, automate tasks and stay ahead in the
              AI revolution.
            </p>

          </div>

          {/* Pricing Card */}

          <div className="mt-14 sm:mt-16 lg:mt-20 rounded-3xl border border-green-500/30 bg-gradient-to-br from-slate-900 to-[#081426] p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(34,197,94,.15)]">

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

              {/* LEFT */}

              <div className="lg:w-2/3">

                <div className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm sm:text-base font-bold text-white">

                  <Clock3 size={18} />

                  {bootcamp.offerLabel}

                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white">
                  {bootcamp.title}
                </h3>

                {/* Pricing */}

                <div className="mt-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">

                  <div>

                    <p className="text-slate-500 text-sm uppercase tracking-wide">
                      Today
                    </p>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-400 leading-none">
                      ₦{bootcamp.earlyBirdPrice.toLocaleString()}
                    </h2>

                  </div>

                  <div>

                    <p className="text-slate-500 text-sm uppercase tracking-wide">
                      Regular Price
                    </p>

                    <p className="text-2xl sm:text-3xl text-slate-500 line-through">
                      ₦{bootcamp.regularPrice.toLocaleString()}
                    </p>

                  </div>

                </div>

                {/* Features */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {bootcamp.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle
                        className="text-green-400 shrink-0 mt-1"
                        size={20}
                      />

                      <span className="text-sm sm:text-base leading-6 text-slate-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* RIGHT */}

              <div className="lg:w-1/3">

                <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8">

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Why Enroll Today?
                  </h3>

                  <div className="mt-8 space-y-6">

                    <div className="flex items-start gap-4">

                      <ShieldCheck
                        className="text-green-400 shrink-0 mt-1"
                        size={22}
                      />

                      <div>

                        <h4 className="font-semibold text-white text-base sm:text-lg">
                          Beginner Friendly
                        </h4>

                        <p className="mt-1 text-sm sm:text-base leading-6 text-slate-400">
                          No coding experience required.
                        </p>

                      </div>

                    </div>

                    <div className="flex items-start gap-4">

                      <Award
                        className="text-green-400 shrink-0 mt-1"
                        size={22}
                      />

                      <div>

                        <h4 className="font-semibold text-white text-base sm:text-lg">
                          Certificate Included
                        </h4>

                        <p className="mt-1 text-sm sm:text-base leading-6 text-slate-400">
                          Receive a TechHarvest Certificate after completion.
                        </p>

                      </div>

                    </div>

                    <div className="flex items-start gap-4">

                      <Users
                        className="text-green-400 shrink-0 mt-1"
                        size={22}
                      />

                      <div>

                        <h4 className="font-semibold text-white text-base sm:text-lg">
                          Community Access
                        </h4>

                        <p className="mt-1 text-sm sm:text-base leading-6 text-slate-400">
                          Learn alongside other AI enthusiasts.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* CTA */}

                  <Link
                    href={bootcamp.cta.href}
                    className="
                      mt-8
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-green-500
                      py-4
                      sm:py-5
                      text-base
                      sm:text-lg
                      font-bold
                      text-white
                      transition
                      hover:bg-green-600
                    "
                  >

                    {bootcamp.cta.title}

                    <ArrowRight size={20} />

                  </Link>

                  <p className="mt-5 text-center text-xs sm:text-sm text-slate-500">
                    {bootcamp.offerEnds}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}