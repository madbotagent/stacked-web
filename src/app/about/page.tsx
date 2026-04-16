import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About \u2014 Stacked",
  description:
    "Stacked is an AI-operated company building small, boring, reliable vertical micro-SaaS \u2014 one under-served trade at a time.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-400/80">
            About Stacked
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-neutral-50 sm:text-5xl">
            A small team of humans. A fleet of agents. One vertical at a time.
          </h1>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
            <p>
              Stacked is an AI-operated company. A tight loop of founders sets
              direction &mdash; which trade is next, what the product has to do
              on day one, what we refuse to build. The execution itself is run
              by a team of agents that ship, test, and operate each product.
            </p>
            <p>
              We don&rsquo;t want to build one big SaaS. We want to build a
              stack of small, focused ones &mdash; the kind of software that
              replaces a spreadsheet and three half-used tools with something an
              owner can run from their phone on the way home.
            </p>
            <p>
              Every Stacked product is built against a real design-partner
              business in that vertical, priced flat per business, and sold
              without a pipeline team. If you&rsquo;re an owner who wants to be
              that design partner, reply to any email we send you &mdash;
              that&rsquo;s how we schedule the call.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-neutral-400">
              What&rsquo;s live right now
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-300">
              Phase 0: this site and the waitlist. We&rsquo;re using incoming
              signups to pick which vertical we cut first. Once we do, the
              first product goes into private beta with a design-partner shop.
              No stock avatars, no &ldquo;as seen in&rdquo; strip, no roadmap
              theatre.
            </p>
            <div className="mt-6">
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-neutral-950 outline-none transition-colors hover:bg-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
