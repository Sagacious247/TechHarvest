"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import FadeIn from "../FadeIn";
import audience from "@/data/audience";

export default function WhoShouldAttend() {
  return (
    <FadeIn>
      <section className="bg-slate-900 py-16 md:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.25em] text-green-400 font-semibold">

              WHO SHOULD ATTEND

            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">

              {audience.title}

            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-400">

              {audience.subtitle}

            </p>

          </div>

          <div className="grid gap-6 lg:gap-8 mt-12 lg:mt-20 md:grid-cols-2 lg:grid-cols-3">

            {audience.groups.map((group) => {

              const Icon = group.icon;

              return (

                <div
                  key={group.title}
                 className="rounded-3xl border border-slate-700 bg-slate-950 p-6 sm:p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_25px_70px_rgba(34,197,94,.15)]"
                >

                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-green-500">

                    <Icon
                      size={26}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white">

                    {group.title}

                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">

                    {group.description}

                  </p>

                </div>

              );

            })}

          </div>

          <div className="mt-16 lg:mt-24 rounded-[32px] border border-green-500/20 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 sm:p-8 lg:p-12 text-center">

            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">

              {audience.cta.title}

            </h3>

            <p className="mt-5 text-base sm:text-lg lg:text-xl leading-7 text-slate-300">

              {audience.cta.subtitle}

            </p>

            <Link
              href={audience.cta.href}
              className="inline-flex mt-8 lg:mt-10 w-full sm:w-auto justify-center items-center gap-3 rounded-2xl bg-green-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white transition hover:bg-green-600"
            >

              {audience.cta.button}

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}