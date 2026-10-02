"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Sparkles,
  Users,
  Accessibility,
  MessageCircle,
} from "lucide-react";

const conditions = [
  {
    title: "ADHD",
    description: "Support focus, attention and executive functioning.",
    icon: Brain,
  },
  {
    title: "Specific Learning Disabilities",
    description: "Interactive activities for structured learning support.",
    icon: Sparkles,
  },
  {
    title: "Anxiety",
    description: "Create calmer, more predictable digital sessions.",
    icon: Heart,
  },
  {
    title: "Depression",
    description: "Encourage gentle engagement during remote sessions.",
    icon: MessageCircle,
  },
  {
    title: "Intellectual Disabilities",
    description: "Simple and accessible interactive experiences.",
    icon: Accessibility,
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="for-you"
      className="relative overflow-hidden bg-[#f8fafc] px-5 py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-medium text-violet-700">
              <Users size={13} />
              Designed around people
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
              One platform.
              <span className="block text-violet-600">
                Different ways to engage.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-slate-500 md:ml-auto md:text-lg">
            SyncSpace gives psychologists and counselors a flexible digital
            environment for sessions where communication, interaction and
            accessibility matter.
          </p>
        </motion.div>

        {/* Provider card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl shadow-slate-200/40"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Provider side */}
            <div className="relative overflow-hidden bg-slate-950 p-8 text-white md:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Users size={23} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                  For professionals
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  Psychologists &
                  <br />
                  Counselors
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                  Keep the human connection of a live session while adding
                  structured activities when they can help.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live session ready
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Designed to support work with
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {conditions.map((condition, index) => {
                  const Icon = condition.icon;

                  return (
                    <motion.div
                      key={condition.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.07,
                      }}
                      whileHover={{ y: -3 }}
                      className="group rounded-2xl border border-slate-200 p-4 transition hover:border-violet-200 hover:bg-violet-50/40"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-violet-100 group-hover:text-violet-600">
                          <Icon size={18} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">
                            {condition.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {condition.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-violet-500" />

                  <p className="text-xs font-semibold text-violet-800">
                    Accessibility-first experience
                  </p>
                </div>

                <p className="mt-1 text-xs leading-5 text-violet-700/70">
                  Clear interactions, predictable layouts and gentle motion
                  help reduce unnecessary visual and interaction overload.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}