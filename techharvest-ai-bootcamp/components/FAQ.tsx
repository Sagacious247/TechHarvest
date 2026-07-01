"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "Do I need prior AI experience?",
    answer:
      "No. This bootcamp is designed for complete beginners as well as professionals who want to improve their AI skills.",
  },
  {
    question: "How will the classes be held?",
    answer:
      "All classes will be conducted live on Zoom, allowing you to ask questions, interact with the instructor, and participate in practical sessions.",
  },
  {
    question: "Will the classes be recorded?",
    answer:
      "Yes. Every registered participant will receive access to the class recordings in case they miss a live session.",
  },
  {
    question: "Can I attend using my phone?",
    answer:
      "Yes. You can join using a smartphone, tablet, or computer. However, a laptop is recommended for the best learning experience.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Participants who complete the bootcamp will receive a TechHarvest Certificate of Completion.",
  },
  {
    question: "How long is the bootcamp?",
    answer:
      "The bootcamp runs for four weeks with live practical classes, assignments, and project-based learning.",
  },
  {
    question: "How do I make payment?",
    answer:
      "Payment can be made securely online. Once payment is confirmed, you'll receive instructions for joining the bootcamp.",
  },
  {
    question: "What happens after I register?",
    answer:
      "You'll receive a confirmation email together with your onboarding information, Zoom details, and everything you need before the first class.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FadeIn>
     <section className="bg-slate-950 py-24">


      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-green-400 font-bold">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="text-5xl font-black text-white mt-5">
            We've Got Answers
          </h2>

          <p className="text-gray-400 text-xl mt-6">
            Everything you need to know before joining the TechHarvest AI Accelerator Bootcamp.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-[#10203F] rounded-2xl border border-slate-700 overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="text-green-500" />
                ) : (
                  <ChevronDown className="text-green-500" />
                )}

              </button>

              {openIndex === index && (

                <div className="px-8 pb-6 text-gray-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  </FadeIn>
  );
}