import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Glow Decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      {/* Header / Nav */}
      <header className="max-w-7xl w-full mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <span className="font-extrabold text-black text-sm">PF</span>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Personal Finance
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
          <a href="#workspace" className="text-sm text-slate-400 hover:text-white transition-colors">Workspace</a>
          <button className="text-xs bg-slate-800 border border-slate-700/60 hover:bg-slate-700 hover:border-slate-600 px-4 py-2 rounded-lg font-medium transition-all">
            v1.0.0 Stable
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center flex-1 flex flex-col justify-center items-center py-20 z-10">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full text-xs text-sky-400 font-semibold mb-6 animate-pulse">
          <span>Turborepo Monorepo Live</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          Track Your Finances with{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Absolute Control
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A high-performance workspace designed for financial clarity. Seamlessly manage budgets, log recurring expenses, and forecast growth with zero complexity.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-black font-semibold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-sky-500/15">
            Launch Dashboard
          </button>
          <button className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-300 font-semibold text-sm transition-colors">
            View API Docs
          </button>
        </div>
      </section>

      {/* Footer Features Bar */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/40 backdrop-blur-md py-6 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © 2026 Rajommkar. Personal Finance Dashboard. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Next.js 16 (Turbopack)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Tailwind v4 Active
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              PNPM Resolved
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
