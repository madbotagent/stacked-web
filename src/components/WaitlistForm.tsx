"use client";

import { useActionState, useId } from "react";
import {
  initialWaitlistState,
  submitWaitlist,
} from "@/app/actions/waitlist";
import { VERTICALS } from "@/config/verticals";

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    submitWaitlist,
    initialWaitlistState,
  );
  const emailId = useId();
  const verticalId = useId();
  const painId = useId();
  const statusId = useId();

  const isError = state.status === "error";
  const isSuccess = state.status === "success";

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-emerald-100"
      >
        <p className="text-base font-medium">You&rsquo;re on the list.</p>
        <p className="mt-2 text-sm text-emerald-200/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby={isError ? statusId : undefined}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor={emailId}
          className="text-sm font-medium text-neutral-200"
        >
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@yourshop.com"
          defaultValue={state.values?.email ?? ""}
          className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={verticalId}
          className="text-sm font-medium text-neutral-200"
        >
          What do you do?
        </label>
        <select
          id={verticalId}
          name="vertical"
          required
          defaultValue={state.values?.vertical ?? ""}
          className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-neutral-100 outline-none transition-colors focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30"
        >
          <option value="" disabled>
            Pick the one that fits best…
          </option>
          {VERTICALS.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={painId} className="text-sm font-medium text-neutral-200">
          Biggest admin time-sink right now?{" "}
          <span className="text-neutral-500">(optional)</span>
        </label>
        <input
          id={painId}
          name="painPoint"
          type="text"
          maxLength={140}
          placeholder="Chasing invoices, no-shows, review asks…"
          defaultValue={state.values?.painPoint ?? ""}
          className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-500 outline-none transition-colors focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30"
        />
      </div>

      {isError && (
        <p
          id={statusId}
          role="alert"
          aria-live="polite"
          className="rounded-lg border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-200"
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-neutral-950 outline-none transition-colors hover:bg-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Adding you…" : "Get on the list"}
        </button>
        <p className="text-xs text-neutral-500">
          No spam, no &ldquo;newsletter&rdquo;. One email when your vertical is
          ready.
        </p>
      </div>
    </form>
  );
}
