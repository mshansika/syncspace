"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

import HeroMockup from "./HeroMockup";
import Navbar from "./Navbar";

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc] px-5 pb-20 pt-28">
      <Navbar />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-medium text-violet-700 shadow-sm"
            >
              <Sparkles size={13} />
              Therapy beyond the video call
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 md:text-6xl"
            >
              Make every session
              <span className="block text-violet-600">more engaging.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-7 text-slate-600 md:text-lg"
            >
              SyncSpace combines secure live video with real-time collaborative
              activities designed to help therapists create more engaging remote
              sessions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => setBookingOpen(true)}
                className="group flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Book a Demo
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() =>
                  document.getElementById("modules")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Modules
                <ArrowDown size={15} />
              </button>
            </motion.div>

            {/* Small trust text */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>Designed for therapists</span>

              <span>•</span>

              <span>Built with accessibility in mind</span>
            </div>
          </div>

          {/* Right side */}
          <HeroMockup />
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        type="demo"
      />
    </section>
  );
}
