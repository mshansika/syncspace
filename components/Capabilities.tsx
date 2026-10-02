"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  FileText,
  LockKeyhole,
  Video,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    title: "Smart Session Scheduling",
    description:
      "Keep appointments organized with a simple scheduling experience designed around therapy sessions.",
    icon: CalendarClock,
    size: "large",
  },
  {
    title: "End-to-End Encrypted Video",
    description:
      "A secure video experience designed with privacy and sensitive conversations in mind.",
    icon: LockKeyhole,
    size: "small",
  },
  {
    title: "Live Clinical Notes",
    description:
      "Keep session notes alongside the conversation instead of constantly switching tools.",
    icon: FileText,
    size: "small",
  },
  {
    title: "Synchronized Activities",
    description:
      "Launch an activity and keep both participants looking at the same live state.",
    icon: Activity,
    size: "large",
  },
];

export default function Capabilities() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-white px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-500">
            Platform capabilities
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Everything around the
            <span className="text-violet-600"> session.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
            SyncSpace brings the essential pieces of a remote session into
            one calm, connected workspace.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-xl hover:shadow-slate-200/50 ${
                  item.size === "large"
                    ? "min-h-[300px]"
                    : "min-h-[260px]"
                }`}
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                      <Icon size={22} />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition group-hover:text-violet-600">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="mt-auto pt-12">
                    <h3 className="text-xl font-semibold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small video/session preview */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white md:p-8"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                SESSION CONNECTED
              </div>

              <h3 className="mt-4 text-2xl font-semibold">
                One workspace.
                <br />
                Fewer interruptions.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                Video, activities and session information can work together
                instead of forcing therapists and clients to jump between
                different tools.
              </p>
            </div>

            {/* Mini UI */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 flex min-h-36 items-center justify-center rounded-xl bg-white/10">
                  <Video className="text-slate-400" size={28} />
                </div>

                <div className="flex min-h-36 flex-col gap-2">
                  <div className="flex flex-1 items-center justify-center rounded-xl bg-violet-500/20">
                    <Activity className="text-violet-300" size={20} />
                  </div>

                  <div className="flex flex-1 items-center justify-center rounded-xl bg-emerald-500/10">
                    <FileText className="text-emerald-300" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}