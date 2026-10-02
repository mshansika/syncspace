"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Calculator,
  CircleDot,
  Puzzle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import MemoryMatch from "./MemoryMatch";

type Module = {
  id: string;
  title: string;
  description: string;
  purpose: string;
  icon: React.ReactNode;
};

const modules: Module[] = [
  {
    id: "maze",
    title: "Maze",
    description: "Navigate simple paths and build focus.",
    purpose: "Executive functioning & focus",
    icon: <Puzzle size={19} />,
  },
  {
    id: "bubble",
    title: "Bubble Splash",
    description: "Tap, react and regulate through play.",
    purpose: "Sensory regulation & reflexes",
    icon: <CircleDot size={19} />,
  },
  {
    id: "calculator",
    title: "Talking Calculator",
    description: "Interactive number activities with guidance.",
    purpose: "Numeracy & SLD support",
    icon: <Calculator size={19} />,
  },
  {
    id: "memory",
    title: "Memory Match",
    description: "Find pairs and practise pattern recall.",
    purpose: "Working memory & pattern recall",
    icon: <Brain size={19} />,
  },
];

export default function ModulePlayground() {
  const [activeModule, setActiveModule] = useState("memory");

  const selectedModule = modules.find(
    (module) => module.id === activeModule
  );

  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-white px-5 py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700">
            <Sparkles size={13} />
            Real-time activity engine
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Turn screen time into
            <span className="text-violet-600"> shared activity.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            Interactive modules can be launched during a live session
            and synchronized across both screens.
          </p>
        </motion.div>

        {/* Playground */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/50"
        >
          <div className="grid lg:grid-cols-[270px_1fr]">
            {/* Module list */}
            <div className="border-b border-slate-200 bg-white p-4 lg:border-b-0 lg:border-r">
              <div className="mb-4 px-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Activity library
                </p>
              </div>

              <div className="space-y-2">
                {modules.map((module) => {
                  const active = activeModule === module.id;

                  return (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${
                        active
                          ? "bg-slate-950 text-white shadow-lg shadow-slate-300/40"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                          active
                            ? "bg-white/10 text-violet-300"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {module.icon}
                      </span>

                      <span className="flex-1">
                        <span className="block text-sm font-semibold">
                          {module.title}
                        </span>

                        <span
                          className={`mt-0.5 block text-[11px] ${
                            active
                              ? "text-slate-400"
                              : "text-slate-400"
                          }`}
                        >
                          {module.purpose}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={15}
                        className={`transition ${
                          active
                            ? "text-violet-300"
                            : "text-slate-300 group-hover:text-slate-500"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Plug-in architecture */}
              <div className="mt-5 rounded-2xl border border-dashed border-violet-200 bg-violet-50 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                    <Puzzle size={14} />
                  </div>

                  <span className="text-xs font-semibold text-violet-800">
                    Plug-in Architecture
                  </span>
                </div>

                <p className="mt-2 text-[11px] leading-5 text-violet-700/70">
                  New therapeutic activities can be added without
                  rebuilding the core session experience.
                </p>
              </div>
            </div>

            {/* Preview */}
            <div className="min-h-[560px] p-5 md:p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
                    Live preview
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-slate-950">
                    {selectedModule?.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedModule?.description}
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:flex">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Synced
                </div>
              </div>

              {/* Memory Match */}
              {activeModule === "memory" && <MemoryMatch />}

              {/* Maze */}
              {activeModule === "maze" && (
                <div className="flex min-h-[390px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-50 text-violet-600">
                      <Puzzle size={36} />
                    </div>

                    <h4 className="mt-5 text-xl font-semibold text-slate-900">
                      Focus Maze
                    </h4>

                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      A future interactive maze can guide users through
                      progressively challenging paths.
                    </p>

                    <span className="mt-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-500">
                      Interactive module preview
                    </span>
                  </div>
                </div>
              )}

              {/* Bubble Splash */}
              {activeModule === "bubble" && (
                <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  {[...Array(12)].map((_, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, index % 2 === 0 ? 10 : -10, 0],
                      }}
                      transition={{
                        duration: 2 + index * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-400"
                      style={{
                        left: `${10 + ((index * 17) % 80)}%`,
                        top: `${15 + ((index * 23) % 65)}%`,
                      }}
                    >
                      <CircleDot size={17} />
                    </motion.div>
                  ))}

                  <div className="relative z-10 rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur">
                    <CircleDot
                      size={34}
                      className="mx-auto text-violet-500"
                    />

                    <h4 className="mt-4 text-xl font-semibold text-slate-900">
                      Bubble Splash
                    </h4>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      A sensory-friendly interaction space for tapping,
                      reaction and regulation activities.
                    </p>
                  </div>
                </div>
              )}

              {/* Calculator */}
              {activeModule === "calculator" && (
                <div className="flex min-h-[390px] items-center justify-center rounded-3xl border border-slate-200 bg-white">
                  <div className="w-full max-w-sm rounded-3xl bg-slate-950 p-5 shadow-xl">
                    <div className="rounded-2xl bg-slate-900 p-5 text-right">
                      <p className="text-xs text-slate-500">
                        TALKING CALCULATOR
                      </p>

                      <p className="mt-3 text-3xl font-semibold text-white">
                        24 + 18
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(
                        (number) => (
                          <button
                            key={number}
                            className="rounded-xl bg-slate-800 py-4 text-sm font-semibold text-white transition hover:bg-slate-700"
                          >
                            {number}
                          </button>
                        )
                      )}
                    </div>

                    <div className="mt-3 rounded-xl bg-violet-600 py-3 text-center text-sm font-semibold text-white">
                      + Add
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}