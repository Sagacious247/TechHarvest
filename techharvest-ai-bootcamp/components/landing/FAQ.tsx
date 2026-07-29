"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import FadeIn from "../FadeIn";
import faqs from "@/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <FadeIn>
      <section
        id="faqs"
        className="bg-slate-950 py-16 md:py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">

          {/* Section Header */}

          <div className="text-center">

            <span className="inline-block uppercase tracking-[0.2em] md:tracking-[0.25em] text-green-400 font-semibold text-xs sm:text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              Everything You Need To Know
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-slate-400">
              Still have questions? We've answered the most common ones below.
            </p>

          </div>

          {/* FAQ List */}

          <div className="mt-12 sm:mt-16 lg:mt-20 space-y-4 sm:space-y-5">

            {faqs.map((faq, index) => {

              const active = open === index;

              return (

                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-2xl
                    sm:rounded-3xl
                    border
                    border-slate-700
                    bg-slate-900
                    transition
                    hover:border-green-500/50
                  "
                >

                  <button
                    onClick={() =>
                      setOpen(active ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-5
                      sm:px-8
                      sm:py-7
                      text-left
                    "
                  >

                    <h3 className="flex-1 text-base sm:text-lg lg:text-xl font-bold leading-7 text-white">
                      {faq.question}
                    </h3>

                    <div className="shrink-0">

                      {active ? (

                        <ChevronUp
                          size={22}
                          className="text-green-400"
                        />

                      ) : (

                        <ChevronDown
                          size={22}
                          className="text-green-400"
                        />

                      )}

                    </div>

                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        active
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >

                    <div className="px-5 pb-6 sm:px-8 sm:pb-8">

                      <p className="text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-400">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}