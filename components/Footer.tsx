import { ArrowUpRight, HeartHandshake, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                S
              </div>

              <span className="text-lg font-semibold tracking-tight text-slate-950">
                SyncSpace
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              A collaborative digital therapy platform that helps therapists
              create more engaging and accessible remote sessions.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-500">
                <ShieldCheck size={14} />
                Privacy focused
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-500">
                <HeartHandshake size={14} />
                Accessibility first
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">Explore</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a
                href="#modules"
                className="block transition hover:text-slate-950"
              >
                Modules
              </a>

              <a
                href="#for-you"
                className="block transition hover:text-slate-950"
              >
                Who It's For
              </a>

              <a
                href="#platform"
                className="block transition hover:text-slate-950"
              >
                Platform
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">Product</h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a
                href="#modules"
                className="flex items-center gap-1 transition hover:text-slate-950"
              >
                Interactive Activities
                <ArrowUpRight size={13} />
              </a>

              <a
                href="#platform"
                className="flex items-center gap-1 transition hover:text-slate-950"
              >
                Platform Features
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SyncSpace. All rights reserved.</p>

          <p>Designed for more connected therapy sessions.</p>
        </div>
      </div>
    </footer>
  );
}
