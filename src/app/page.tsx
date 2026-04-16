import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";

const VALUE_PROPS: { title: string; body: string }[] = [
  {
    title: "Built for your trade, not \u201csmall business\u201d in the abstract.",
    body: "Pick your industry when you sign up. What you get is tuned for that work \u2014 not a generic CRM you have to configure for six weekends.",
  },
  {
    title: "The app does the follow-through, not just the tracking.",
    body: "It messages the no-shows, chases the unpaid invoice, asks for the review, and reschedules the cancel \u2014 in your voice, without you typing.",
  },
  {
    title: "Owner-first pricing. No seat tax. No \u201ccontact sales\u201d.",
    body: "One flat monthly price per business. Cancel in the app. We\u2019d rather earn the next month than lock you into the last one.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[540px] bg-[radial-gradient(ellipse_at_center,theme(colors.emerald.500/.12),transparent_60%)]"
          />
          <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_theme(colors.emerald.400)]"
              />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-neutral-400">
                Phase 0 &middot; Waitlist open
              </span>
            </div>

            <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-50 sm:text-6xl">
              Software that runs the boring half of your small business &mdash;
              on its own.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-400 sm:text-xl">
              We build AI-operated apps for specific trades &mdash; scheduling,
              follow-ups, invoices, reviews &mdash; so owners stop living in
              their inbox and start owning their evenings back.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-neutral-950 outline-none transition-colors hover:bg-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Join the waitlist
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-base text-neutral-200 outline-none transition-colors hover:border-white/20 hover:text-neutral-50 focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                See how it works <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section
          id="how-it-works"
          aria-labelledby="value-props-heading"
          className="border-t border-white/5 bg-neutral-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2
              id="value-props-heading"
              className="max-w-2xl text-pretty text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl"
            >
              Three promises we make to every owner on the waitlist.
            </h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {VALUE_PROPS.map((prop, i) => (
                <li
                  key={prop.title}
                  className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 transition-colors hover:border-emerald-400/20 hover:bg-neutral-900/70"
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-emerald-400/80">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-50">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {prop.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Demo teaser */}
        <section
          aria-labelledby="demo-heading"
          className="border-t border-white/5 bg-neutral-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-2">
                <h2
                  id="demo-heading"
                  className="text-pretty text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl"
                >
                  What it looks like when the app is running your week.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">
                  We&rsquo;re filming a narrated walkthrough with our first
                  design-partner shop right now. It&rsquo;ll show one full week
                  &mdash; missed calls recovered, invoices chased, reviews
                  earned &mdash; on autopilot. Drop in your email and
                  we&rsquo;ll send it the day it&rsquo;s cut.
                </p>
              </div>
              <div className="lg:col-span-3">
                <div
                  role="img"
                  aria-label="Demo video placeholder. Walkthrough drops in Phase 1."
                  className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,theme(colors.neutral.900)_0%,theme(colors.neutral.800)_40%,theme(colors.emerald.900/.4)_100%)]"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-emerald-400/30 bg-neutral-950/60 px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300 backdrop-blur">
                      Demo dropping Phase 1
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(ellipse_at_bottom,theme(colors.emerald.500/.25),transparent_70%)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist"
          aria-labelledby="waitlist-heading"
          className="border-t border-white/5 bg-neutral-950 scroll-mt-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2
                id="waitlist-heading"
                className="text-pretty text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl"
              >
                Join the Phase 0 waitlist.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                We&rsquo;re shipping one vertical at a time. Tell us what you
                do and we&rsquo;ll invite you the week your version is ready
                &mdash; with onboarding on a live call, not a help article.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 sm:p-8">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section
          aria-labelledby="about-heading"
          className="border-t border-white/5 bg-neutral-950"
        >
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2
              id="about-heading"
              className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400/80"
            >
              Who&rsquo;s building this
            </h2>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-neutral-200 sm:text-2xl">
              Stacked is an AI-operated company &mdash; a small team of humans
              setting direction, and a fleet of agents doing the execution. We
              pick one under-served vertical, build the app that runs the admin
              side of it, and move on to the next.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              The goal isn&rsquo;t one big SaaS; it&rsquo;s a stack of small,
              boring, reliable ones.{" "}
              <Link
                href="/about"
                className="rounded-sm text-emerald-300 underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                More on what we&rsquo;re building &rarr;
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
