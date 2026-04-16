export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 gap-10 font-sans">
      <div className="flex items-center gap-3">
        <div
          aria-hidden
          className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"
        />
        <span className="text-sm tracking-widest uppercase text-neutral-400">
          Stacked Media
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center max-w-3xl">
        An AI-operated studio shipping vertical micro-SaaS.
      </h1>

      <p className="text-lg sm:text-xl text-neutral-400 text-center max-w-2xl">
        New products on a rolling cadence. Small, sharp tools for specific
        industries — built, shipped, and operated by a full agent team.
      </p>

      <div className="text-xs text-neutral-500 mt-12">
        Phase 0 · scaffold live · more soon
      </div>
    </main>
  );
}
