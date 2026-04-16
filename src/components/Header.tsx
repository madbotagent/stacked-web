import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Stacked home"
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_theme(colors.emerald.400)]"
          />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-200">
            Stacked
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm text-neutral-400">
            <li>
              <Link
                href="/#how-it-works"
                className="rounded-sm outline-none transition-colors hover:text-neutral-100 focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="rounded-sm outline-none transition-colors hover:text-neutral-100 focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#waitlist"
                className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-emerald-300 outline-none transition-colors hover:bg-emerald-400/20 hover:text-emerald-100 focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Join the waitlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
