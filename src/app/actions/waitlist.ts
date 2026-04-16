"use server";

import { VERTICALS, type VerticalId } from "@/config/verticals";

const VERTICAL_IDS = new Set<string>(VERTICALS.map((v) => v.id));

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
  // Preserve typed values so the form can repopulate on validation error.
  values?: {
    email?: string;
    vertical?: string;
    painPoint?: string;
  };
};

export const initialWaitlistState: WaitlistState = {
  status: "idle",
  message: "",
};

function logSubmission(payload: {
  email: string;
  vertical: VerticalId;
  painPoint: string | null;
}) {
  // Phase 0: no database. CEO explicitly said "a simple server log on the
  // waitlist POST is enough." When we add a DB (post-STA-5), swap this for
  // an insert into the `waitlist` table.
  console.log("[waitlist]", {
    at: new Date().toISOString(),
    ...payload,
  });
}

export async function submitWaitlist(
  _prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim();
  const vertical = String(formData.get("vertical") ?? "").trim();
  const painPoint = String(formData.get("painPoint") ?? "").trim();

  const values = {
    email,
    vertical,
    painPoint: painPoint || undefined,
  };

  if (!email || !EMAIL_REGEX.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email so we can send the invite.",
      values,
    };
  }

  if (!vertical || !VERTICAL_IDS.has(vertical)) {
    return {
      status: "error",
      message: "Pick what you do so we can match you to the right vertical.",
      values,
    };
  }

  if (painPoint.length > 140) {
    return {
      status: "error",
      message: "Keep the admin time-sink note under 140 characters.",
      values,
    };
  }

  try {
    logSubmission({
      email,
      vertical: vertical as VerticalId,
      painPoint: painPoint || null,
    });
  } catch {
    return {
      status: "error",
      message: "Something broke on our side. Try again in a minute.",
      values,
    };
  }

  return {
    status: "success",
    message:
      "You're on the list. We'll email you the week your vertical is ready — onboarding on a live call, not a help article.",
  };
}
