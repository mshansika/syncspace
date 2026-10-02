"use client";

import { motion } from "framer-motion";
import { Brain, Check, Lock, Mic, MoreHorizontal, Video } from "lucide-react";

export default function HeroMockup() {
  const cards = ["🧠", "?", "🧩", "?"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
        {/* Session header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <p className="text-xs font-medium text-slate-400">
              SYN CSPACE SESSION
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              Focus & Memory Session
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Live
          </div>
        </div>

        {/* Session area */}
        <div className="grid gap-3 bg-slate-50 p-4 md:grid-cols-[0.8fr_1.2fr]">
          {/* Therapist video */}
          <div className="relative min-h-[250px] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 via-slate-100 to-white">
            <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
              Therapist
            </div>

            <div className="flex h-full items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                <span className="text-3xl">👩🏻‍⚕️</span>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/80 px-3 py-2 backdrop-blur">
              <span className="text-xs font-medium text-slate-700">
                Dr. Maya
              </span>

              <div className="flex gap-1.5 text-slate-500">
                <Mic size={14} />
                <Video size={14} />
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="min-h-[250px] rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-violet-500">
                  COLLABORATIVE ACTIVITY
                </p>

                <h3 className="mt-1 font-semibold text-slate-900">
                  Memory Match
                </h3>
              </div>

              <Brain size={20} className="text-violet-500" />
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Find the matching pairs together.
            </p>

            {/* Memory cards */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {cards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  className={`flex h-16 items-center justify-center rounded-xl border text-xl ${
                    item === "?"
                      ? "border-slate-200 bg-slate-50"
                      : "border-violet-100 bg-violet-50"
                  }`}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">Client's turn</span>

              <span className="flex items-center gap-1 text-emerald-600">
                <Check size={14} />
                Synced
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Lock size={13} />
            Secure session
          </div>

          <MoreHorizontal size={18} className="text-slate-400" />
        </div>
      </div>
    </motion.div>
  );
}
