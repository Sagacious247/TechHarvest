"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Users,
  Star,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import BootcampPreviewModal from "@/components/landing/BootcampPreviewModal";
import { useLandingSettings } from "@/hooks/useLandingSettings";

import FadeIn from "../FadeIn";

export default function Hero() {

  const [openPreview, setOpenPreview] =
  useState(false);

const { settings } =
  useLandingSettings();

  return (
    <FadeIn>
      <section className="relative overflow-hidden bg-slate-950"  id="home">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#16a34a20,transparent_45%)]" />

        {/* <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24"> */}
        <div className="relative max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24">

          {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT */}

            <div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                // className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-500/30 px-5 py-2 text-green-400 font-semibold"
                className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-500/30 px-4 py-2 text-xs sm:text-sm font-semibold text-green-400"
              >
                🔥 Enrollment Now Open
              </motion.div>

              {/* <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white"> */}
              <h1 className="mt-6 lg:mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] text-white max-w-xl">

                Master AI

                <span className="block text-green-500 mt-2">
                  Before AI Masters Your Future
                </span>

              </h1>

              {/* <p className="mt-8 text-xl leading-9 text-gray-300 max-w-2xl"> */}
              <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-8 text-gray-300 max-w-xl">

                Stop watching Artificial Intelligence change the world.

                Become the person who uses AI to build businesses,
                increase productivity, earn more income and stay
                valuable in the future.

                No coding experience required.

              </p>

              {/* CTA */}

              {/* <div className="flex flex-wrap gap-5 mt-10"> */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">

                <Link
                  href="/register"
                  className="group flex justify-center items-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-6 lg:px-8 py-4 text-base lg:text-lg font-bold text-white transition"
                >
                  Reserve My Seat

                  <ArrowRight
                    className="group-hover:translate-x-1 transition"
                    size={20}
                  />

                </Link>

            <button
  type="button"
  onClick={() => setOpenPreview(true)}
  className="flex justify-center items-center gap-3 rounded-xl border border-white/20 hover:border-green-500 hover:bg-white/5 px-6 lg:px-8 py-4 text-base text-white transition"
>
  <PlayCircle />

  Watch Bootcamp Preview
</button>

              </div>

              {/* Trust */}

              <div className="grid grid-cols-3 gap-6 lg:gap-10 mt-12 lg:mt-16">

                <div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                    100%
                  </h2>

                  <p className="text-sm lg:text-base text-gray-400">
                    Practical Training
                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-white">
                    4 Weeks
                  </h2>

                  <p className="text-gray-400">
                    Live Bootcamp
                  </p>

                </div>

                <div>

                  <h2 className="text-4xl font-black text-white">
                    Lifetime
                  </h2>

                  <p className="text-gray-400">
                    Community Access
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >

              {/* <div className="absolute w-[450px] h-[450px] rounded-full bg-green-500/20 blur-3xl" /> */}
              <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-green-500/20 blur-3xl" />

              <Image
    src="/julius.png"
    alt="Julius Paul"
    width={620}
    height={760}
    priority
    className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-xl h-auto"
/>

              {/* Floating Cards */}

              <div className="absolute top-10 left-0 bg-[#0f172a] border border-white/10 rounded-xl p-3 lg:p-4 shadow-2xl">

                <div className="flex items-center gap-3">

                  <Users className="text-green-500" />

                  <div>

                    <p className="text-sm lg:text-base text-white font-bold">
                      Live Mentorship
                    </p>

                    <p className="text-xs lg:text-sm text-gray-400">
                      Weekly Zoom Sessions
                    </p>

                  </div>

                </div>

              </div>

              <div className="absolute bottom-12 right-0 bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-2xl">

                <div className="flex items-center gap-3">

                  <Briefcase className="text-green-500" />

                  <div>

                    <p className="text-white font-bold">
                      Real Projects
                    </p>

                    <p className="text-gray-400 text-sm">
                      Build Your Portfolio
                    </p>

                  </div>

                </div>

              </div>

              <div className="absolute top-1/2 -right-6 bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-2xl">

                <div className="flex items-center gap-3">

                  <Star className="text-yellow-400" />

                  <div>

                    <p className="text-white font-bold">
                      Beginner Friendly
                    </p>

                    <p className="text-gray-400 text-sm">
                      No Coding Needed
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <BootcampPreviewModal
  open={openPreview}
  onClose={() => setOpenPreview(false)}
  video={settings?.previewVideo}
/>
    </FadeIn>
  );
}
