"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    
    <FadeIn>
      <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center pt-40">

        <div>

          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">

            ENROLLMENT NOW OPEN

          </span>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
            Master AI <br />
          <span className="text-green-500">
            Before AI Masters Your Future
          </span>
          </h1>
          <p className="text-gray-300 mt-8 text-xl">

            Learn practical AI skills that will help you study smarter,
            work faster, build better businesses and stay ahead.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-green-500 px-8 py-4 rounded-xl text-white font-bold">

              Reserve My Seat

            </button>

            <button className="border border-white px-8 py-4 rounded-xl text-white">

              Watch Video

            </button>

          </div>

        </div>

        <motion.div

          initial={{opacity:0,y:50}}

          animate={{opacity:1,y:0}}

          transition={{duration:1}}

        >

          <Image

            src="/julius.png"

            alt="Julius Paul"

            width={650}

            height={800}

          />

        </motion.div>

      </div>

    </section>
   </FadeIn>
  );
}