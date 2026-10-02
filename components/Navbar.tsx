"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-slate-200/70 bg-white/85 px-5 py-3 shadow-lg shadow-slate-200/30 backdrop-blur-xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
            S
          </div>

          <span className="text-lg font-semibold tracking-tight text-slate-950">
            SyncSpace
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#modules" className="transition hover:text-slate-950">
            Modules
          </a>

          <a href="#platform" className="transition hover:text-slate-950">
            Platform
          </a>

          <a href="#for-you" className="transition hover:text-slate-950">
            Who It's For
          </a>
        </div>

        {/* CTA */}
        <button className="group flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
          Book a Demo
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.nav>
  );
}
