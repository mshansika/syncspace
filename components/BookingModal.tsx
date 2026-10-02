"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CalendarDays,
  Mail,
  User,
  X,
} from "lucide-react";

type BookingType = "demo" | "session";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: BookingType;
};

type FormData = {
  name: string;
  email: string;
  date: string;
};

export default function BookingModal({
  isOpen,
  onClose,
  type,
}: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isDemo = type === "demo";

  const title = isDemo ? "Book a SyncSpace Demo" : "Book a Session";

  const subtitle = isDemo
    ? "See how SyncSpace can support your remote sessions."
    : "Choose a convenient time for your online session.";

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const canContinue =
    formData.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const canSubmit = formData.date !== "";

  const handleNext = () => {
    if (step === 1 && canContinue) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    if (!canSubmit) return;

    setSubmitted(true);
  };

  const handleClose = () => {
    setStep(1);

    setFormData({
      name: "",
      email: "",
      date: "",
    });

    setSubmitted(false);

    onClose();
  };

    useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close booking dialog"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <X size={17} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="border-b border-slate-100 p-7">
                  <div className="pr-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-500">
                      {isDemo ? "For professionals" : "For clients"}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      {title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {subtitle}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="mt-6 flex items-center gap-2">
                    <div
                      className={`h-1.5 flex-1 rounded-full ${
                        step >= 1 ? "bg-violet-600" : "bg-slate-100"
                      }`}
                    />

                    <div
                      className={`h-1.5 flex-1 rounded-full ${
                        step >= 2 ? "bg-violet-600" : "bg-slate-100"
                      }`}
                    />
                  </div>

                  <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                    <span>Your details</span>
                    <span>Choose a time</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step-one"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        className="space-y-5"
                      >
                        {/* Name */}
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Your name
                          </label>

                          <div className="relative">
                            <User
                              size={17}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                              type="text"
                              value={formData.name}
                              onChange={(event) =>
                                updateField("name", event.target.value)
                              }
                              placeholder="Enter your name"
                              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Email address
                          </label>

                          <div className="relative">
                            <Mail
                              size={17}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                              type="email"
                              value={formData.email}
                              onChange={(event) =>
                                updateField("email", event.target.value)
                              }
                              placeholder="you@example.com"
                              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                            />
                          </div>

                          {formData.email !== "" && !canContinue && (
                            <p className="mt-2 text-xs text-red-500">
                              Please enter a valid email address.
                            </p>
                          )}
                        </div>

                        <button
                          onClick={handleNext}
                          disabled={!canContinue}
                          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Continue
                          <ArrowRight size={16} />
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step-two"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                      >
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Choose a preferred date
                        </label>

                        <div className="relative">
                          <CalendarDays
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="date"
                            value={formData.date}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(event) =>
                              updateField("date", event.target.value)
                            }
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                          />
                        </div>

                        <div className="mt-5 rounded-2xl bg-violet-50 p-4">
                          <p className="text-sm font-medium text-violet-900">
                            {isDemo ? "Demo request" : "Session request"}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-violet-700/70">
                            We'll use the details you entered to prepare your
                            request.
                          </p>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button
                            onClick={() => setStep(1)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                          >
                            <ArrowLeft size={16} />
                            Back
                          </button>

                          <button
                            onClick={handleSubmit}
                            disabled={!canSubmit}
                            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Confirm
                            <Check size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              /* Success */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-slate-950">
                  Request received
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Thanks, {formData.name}. Your {isDemo ? "demo" : "session"}{" "}
                  request has been recorded for {formData.date}.
                </p>

                <button
                  onClick={handleClose}
                  className="mt-7 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
