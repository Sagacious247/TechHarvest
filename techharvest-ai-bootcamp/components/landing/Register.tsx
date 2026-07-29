"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import FadeIn from "../FadeIn";
import register from "@/data/register";

export default function Register() {
  return (
    <FadeIn>
      <section
        id="register"
        className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 py-16 md:py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left Content */}

            <div>

              <span className="inline-block uppercase tracking-[0.2em] md:tracking-[0.25em] font-semibold text-white/80 text-xs sm:text-sm">
                {register.badge}
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                {register.title}
              </h2>

              <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-green-50 max-w-2xl">
                {register.subtitle}
              </p>

              {/* Benefits */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {register.benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="mt-1 shrink-0 text-white"
                    />

                    <span className="text-sm sm:text-base leading-6 text-white">
                      {benefit}
                    </span>
                  </div>

                ))}

              </div>

            </div>

            {/* Right Card */}

            <div>

              <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-2xl">

                {/* Stats */}

                <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">

                  {register.stats.map((stat) => (

                    <div key={stat.label}>

                      <h3 className="text-2xl sm:text-3xl font-black text-green-600">
                        {stat.value}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm leading-5 text-slate-500">
                        {stat.label}
                      </p>

                    </div>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 sm:mt-10 space-y-4">

                  <Link
                    href={register.cta.registerHref}
                    className="
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
                    {register.cta.primary}

                    <ArrowRight
                      size={20}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href={register.cta.coursesHref}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-slate-300
                      py-4
                      sm:py-5
                      text-base
                      sm:text-lg
                      font-bold
                      text-slate-700
                      transition
                      hover:bg-slate-100
                    "
                  >
                    {register.cta.secondary}
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
