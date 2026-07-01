"use client";

import Image from "next/image";
import { Award, BookOpen, Brain, Users } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Instructor() {
  return (
    <FadeIn>
     <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">

            <Image
              src="/julius.png"
              alt="Julius Paul"
              width={500}
              height={650}
              className="rounded-3xl shadow-2xl"
            />

          </div>

          <div>

            <span className="text-green-400 uppercase tracking-widest font-bold">
              Meet Your Instructor
            </span>

            <h2 className="text-5xl font-black text-white mt-4">
              Julius Paul
            </h2>

            <p className="text-2xl text-green-400 mt-2 font-semibold">
              Founder, TechHarvest Creative Lab
            </p>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              Julius Paul is an AI Educator, Backend Software Engineer,
              Leadership Teacher, Inspirational Writer, Author and Digital
              Business Builder who is passionate about equipping young people,
              professionals and entrepreneurs with practical Artificial
              Intelligence skills that solve real-world problems.
            </p>

            <p className="text-gray-300 mt-6 leading-8 text-lg">
              Through TechHarvest Creative Lab, his mission is simple:
              help people work smarter, learn faster, become more productive,
              and create more opportunities using AI.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex items-center gap-3">
                <Brain className="text-green-500" size={30} />
                <span className="text-white">AI Educator</span>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="text-green-500" size={30} />
                <span className="text-white">Author</span>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-green-500" size={30} />
                <span className="text-white">Leadership Coach</span>
              </div>

              <div className="flex items-center gap-3">
                <Award className="text-green-500" size={30} />
                <span className="text-white">Software Engineer</span>
              </div>

            </div>

            <button className="mt-12 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl text-white font-bold">
              Join the Bootcamp Today
            </button>

          </div>

        </div>

      </div>

    </section>
   </FadeIn>
  );
}