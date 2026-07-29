"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  PlayCircle,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
  video?: {
    url: string;
    duration?: number;
  };
}

export default function BootcampPreviewModal({
  open,
  onClose,
  video,
}: Props) {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKey);
    }

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,.75)]"
          >
            {/* Header */}

            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950/95 backdrop-blur px-8 py-6">

              <div>

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={18}
                    className="text-green-400"
                  />

                  <span className="text-sm font-semibold uppercase tracking-widest text-green-400">

                    TechHarvest AI Bootcamp

                  </span>

                </div>

                <h2 className="mt-2 text-2xl font-black text-white">

                  Bootcamp Preview

                </h2>

                <p className="mt-2 text-slate-400">

                  Watch a short preview of what you'll learn inside the bootcamp.

                </p>

              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-slate-800 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Body */}

            <div className="flex-1 overflow-y-auto">

              <div className="bg-black">

                {video?.url ? (

                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    playsInline
                    className="aspect-video w-full"
                    src={video.url}
                  />

                ) : (

                  <div className="flex aspect-video flex-col items-center justify-center gap-4">

                    <PlayCircle
                      size={60}
                      className="text-slate-600"
                    />

                    <p className="text-slate-400">

                      Preview video not uploaded yet.

                    </p>

                  </div>

                )}

              </div>

              <div className="space-y-6 px-8 py-8">

                <h3 className="text-3xl font-black text-white">

                  What You'll Learn

                </h3>

                <div className="grid gap-5 md:grid-cols-2">

                  {[
                    "How AI is transforming careers",
                    "Prompt Engineering Mastery",
                    "Content Creation with AI",
                    "AI for Business & Productivity",
                    "Automation & Workflow Tools",
                    "How to Make Money with AI",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4"
                    >

                      <PlayCircle
                        size={18}
                        className="text-green-400"
                      />

                      <span className="text-slate-300">

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* Sticky Footer */}

            <div className="sticky bottom-0 z-20 border-t border-slate-800 bg-slate-950/95 backdrop-blur">

              <div className="flex flex-col gap-6 px-8 py-6 md:flex-row md:items-center md:justify-between">

                <div className="flex flex-wrap items-center gap-8">

                  <div className="flex items-center gap-2">

                    <Clock3
                      size={18}
                      className="text-green-400"
                    />

                    <span className="text-slate-300">

                      4 Weeks Live

                    </span>

                  </div>

                  <div className="text-3xl font-black text-green-400">

                    ₦20,000

                  </div>

                </div>

                <Link
                  href="/register"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-600"
                >

                  Enroll in the Bootcamp

                  <ArrowRight size={20} />

                </Link>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}