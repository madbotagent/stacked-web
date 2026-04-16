import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/5 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Stacked.</p>
        <ul className="flex flex-wrap items-center gap-6">
          <li>
            <Link
              href="/#waitlist"
              className="rounded-sm outline-none transition-colors hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Waitlist
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-sm outline-none transition-colors hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              What we&rsquo;re building
            </Link>
          </li>
          <li>
            <a
              href="mailto:founders@stackedmedia.co"
              className="rounded-sm outline-none transition-colors hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Contact the founder
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
