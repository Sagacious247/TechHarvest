"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Confetti from "react-confetti";

import {
  CheckCircle2,
  LayoutDashboard,
  BookOpen,
  PartyPopper,
} from "lucide-react";

interface Props {
  fullName: string;
}

export default function RegistrationSuccess({
  fullName,
}: Props) {
  const router = useRouter();

  const [countdown, setCountdown] = useState(5);
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/dashboard");
          return 0;
        }

        return prev - 1;
      });

      setProgress((prev) => Math.min(prev + 20, 100));
    }, 1000);

    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(confettiTimer);
    };
  }, [router]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#08142D] via-[#10203F] to-[#08142D] flex items-center justify-center px-6">

      {showConfetti && (
        <Confetti recycle={false} numberOfPieces={250} />
      )}

      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-12">

        <div className="flex justify-center">

          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center animate-pulse">

            <CheckCircle2
              size={60}
              className="text-green-600"
            />

          </div>

        </div>

        <div className="text-center mt-8">

          <h1 className="text-4xl font-black text-slate-900">

            Registration Successful!

          </h1>

          <p className="mt-5 text-xl">

            Welcome

            <span className="font-bold text-green-600">

              {" "}
              {fullName}

            </span>

          </p>

          <p className="mt-6 text-slate-500 leading-8">

            Your TechHarvest AI Bootcamp account has been created successfully.

            <br />

            Your learning journey starts now.

          </p>

        </div>

        {/* Progress */}

        <div className="mt-10">

          <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

            <div
              className="h-full bg-green-500 transition-all duration-1000"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        <p className="mt-5 text-center font-bold text-green-600">

          Redirecting to your dashboard in {countdown}s...

        </p>

        {/* Buttons */}

        <div className="grid gap-4 mt-10">

          <button
            onClick={() =>
              router.push("/dashboard")
            }
            className="bg-green-500 hover:bg-green-600 transition text-white rounded-xl py-4 font-bold flex items-center justify-center gap-3"
          >

            <LayoutDashboard size={20} />

            Go To Dashboard

          </button>

          <button
            onClick={() =>
              router.push("/courses")
            }
            className="border border-slate-300 hover:bg-slate-100 transition rounded-xl py-4 font-bold flex items-center justify-center gap-3"
          >

            <BookOpen size={20} />

            Explore Courses

          </button>

        </div>

        {/* Next Steps */}

        <div className="mt-12 rounded-2xl bg-slate-100 p-6">

          <h3 className="flex items-center gap-2 font-bold text-lg">

            <PartyPopper
              className="text-green-600"
              size={22}
            />

            Your Next Steps

          </h3>

          <div className="space-y-3 mt-5 text-slate-600">

            <p>✅ Access your dashboard</p>

            <p>✅ Start your first AI course</p>

            <p>✅ Complete your first lesson</p>

            <p>✅ Download course resources</p>

            <p>✅ Earn your TechHarvest Certificate</p>

          </div>

        </div>

      </div>

    </section>
  );
}