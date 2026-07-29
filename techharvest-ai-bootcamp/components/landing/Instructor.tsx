"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Award,
  Brain,
  BookOpen,
  Users,
  Globe,
  Mail,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  GraduationCap,
  Briefcase,
  Laptop,
  Star,
  Quote,
} from "lucide-react";

import FadeIn from "../FadeIn";
import { instructor } from "@/data/instructor";

export default function Instructor() {
  const stats = [
  {
    number: "500+",
    label: "Students Trained",
    icon: Users,
  },
  {
    number: "40+",
    label: "AI Tools",
    icon: Brain,
  },
  {
    number: "100%",
    label: "Practical Learning",
    icon: Laptop,
  },
  {
    number: "4 Weeks",
    label: "Live Bootcamp",
    icon: GraduationCap,
  },
];
  return (
    <FadeIn>
      <section
  id="instructor"
  className="relative overflow-hidden bg-slate-950 py-16 md:py-20 lg:py-24"
>
  <div className="absolute inset-0">

  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

</div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">


            {/* LEFT COLUMN IMAGE */}

<div>
<div className="relative mx-auto w-full max-w-xl">

  {/* Background Glow */}

  <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-green-500/20 blur-[120px]" />

  <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

  {/* Profile Card */}

  <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />

    <Image
      src={instructor.image}
      alt={instructor.name}
      width={900}
      height={1100}
      priority
      className="w-full object-cover"
    />

    {/* Bottom Gradient */}

    <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

    {/* Name */}

    <div className="absolute bottom-8 left-8 z-20">

      <h3 className="text-3xl font-black text-white">

        {instructor.name}

      </h3>

      <p className="mt-2 text-green-400 font-semibold">

        AI Educator • Founder • Software Engineer

      </p>

    </div>

  </div>


{/* Floating Card */}

<div className="absolute -left-10 top-16 hidden rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-2xl lg:block">

  <div className="flex items-center gap-4">

    <div className="rounded-xl bg-green-500/20 p-3">

      <Users className="text-green-400" size={22} />

    </div>

    <div>

      <p className="text-2xl font-black text-white">

        500+

      </p>

      <p className="text-sm text-slate-400">

        Students Mentored

      </p>

    </div>

  </div>

</div>


<div className="absolute -right-10 top-40 hidden rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-2xl lg:block">

  <div className="flex items-center gap-4">

    <div className="rounded-xl bg-blue-500/20 p-3">

      <Brain className="text-blue-400" size={22} />

    </div>

    <div>

      <p className="text-2xl font-black text-white">

        40+

      </p>

      <p className="text-sm text-slate-400">

        AI Tools

      </p>

    </div>

  </div>

</div>

<div className="absolute bottom-22 -left-8 hidden rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-2xl lg:block">

  <div className="flex items-center gap-4">

    <div className="rounded-xl bg-yellow-500/20 p-3">

      <Award className="text-yellow-400" size={22} />

    </div>

    <div>

      <p className="font-black text-white">

        Practical Learning

      </p>

      <p className="text-sm text-slate-400">

        Learn by Building

      </p>

    </div>

  </div>

</div>

<div className="absolute bottom-10 right-10 hidden rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-2xl lg:block">

  <div className="flex items-center gap-4">

    <div className="rounded-xl bg-purple-500/20 p-3">

      <BadgeCheck className="text-purple-400" size={22} />

    </div>

    <div>

      <p className="font-black text-white">

        Live Mentorship

      </p>

      <p className="text-sm text-slate-400">

        Weekly Zoom Sessions

      </p>

    </div>

  </div>

</div>

</div>

 {/* Skills */}

  <div className="mt-12">

    <h3 className="mb-5 text-xl sm:text-2xl font-bold text-white">

      What You'll Learn From Julius

    </h3>

    <div className="grid gap-5 sm:grid-cols-2">

      {instructor.skills.map((skill) => {

        const Icon = skill.icon;

        return (

          <div
            key={skill.title}
            // className="group flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-slate-800"
            className="group flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-900/70 p-4 sm:p-5 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-slate-800"
          >

            <div className="rounded-xl bg-green-500/10 p-3 transition group-hover:bg-green-500/20">

              <Icon
                size={22}
                className="text-green-400"
              />

            </div>

            <div>

              <p className="font-semibold text-white">

                {skill.title}

              </p>

            </div>

          </div>

        );

      })}

    </div>

  </div>
</div>

            {/* CONTENT */}
           <div className="flex flex-col justify-center">

  {/* Section Label */}

  <div className="inline-flex w-fit items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2">

    <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">

      Meet Your Instructor

    </span>

  </div>

  {/* Heading */}

  <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-black leading-tight text-white">

    {instructor.name}

  </h2>

  <p className="mt-3 text-xl sm:text-2xl font-semibold text-green-400">

    {instructor.role}

  </p>

  <p className="mt-2 text-base sm:text-lg text-slate-400">

    {instructor.company}

  </p>

  {/* Intro */}

  <div className="mt-8 space-y-6">

    <p className="text-xl sm:text-2xl font-medium leading-8 sm:leading-10 text-white">

      {instructor.tagline}

    </p>

    <p className="text-base sm:text-lg leading-8 sm:leading-9 text-slate-300">

      {instructor.bio}

    </p>

  </div>

  {/* Quote */}

  <div className="mt-10 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-slate-900 p-6 sm:p-8">

    <p className="text-lg italic leading-9 text-white">

      "{instructor.quote}"

    </p>

  </div>



  {/* Contact Card */}

  <div className="mt-12 rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8">

    <h3 className="mb-5 text-xl sm:text-2xl font-bold text-white">

      Connect

    </h3>

    <div className="space-y-5">

      <div className="flex items-center gap-4">

        <Mail
          size={20}
          className="text-green-400"
        />

        <span className="text-sm sm:text-base text-slate-300 break-all sm:break-normal">

          {instructor.email}

        </span>

      </div>

      <div className="flex items-center gap-4">

        <Globe
          size={20}
          className="text-green-400"
        />

        <span className="text-slate-300">

          {instructor.website}

        </span>

      </div>

      <div className="flex items-center gap-4">

        <MapPin
          size={20}
          className="text-green-400"
        />

        <span className="text-slate-300">

          {instructor.location}

        </span>

      </div>

    </div>

  </div>

  {/* CTA */}

  <Link
    href="/register"
    className="group mt-10 inline-flex w-full sm:w-fit justify-center items-center gap-3 rounded-2xl bg-green-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-green-500/40"
  >

    {instructor.cta.button}

    <ArrowRight
      size={22}
      className="transition group-hover:translate-x-2"
    />

  </Link>

</div>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}
