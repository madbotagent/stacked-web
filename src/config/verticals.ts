/**
 * Waitlist vertical options.
 *
 * Kept out of the form component so we can add/remove verticals without
 * reshaping the UI. Phase 0: English-only, no i18n wrapper.
 *
 * The `id` is the stable machine value we store on submit and later segment on.
 * The `label` is the human-readable option shown in the select.
 */
export type VerticalId =
  | "home_services"
  | "fitness_coaching"
  | "solo_professional"
  | "other";

export type Vertical = {
  id: VerticalId;
  label: string;
  friendlyName: string; // used in the confirmation email "{vertical_friendly_name}"
};

export const VERTICALS: readonly Vertical[] = [
  {
    id: "home_services",
    label:
      "Home services (HVAC, plumbing, electrical, handyman, cleaning, landscaping)",
    friendlyName: "a home-services business",
  },
  {
    id: "fitness_coaching",
    label: "Fitness or coaching (personal trainer, studio owner, nutrition coach)",
    friendlyName: "a fitness or coaching practice",
  },
  {
    id: "solo_professional",
    label: "Solo legal, accounting, or consulting",
    friendlyName: "a solo professional practice",
  },
  {
    id: "other",
    label: "Something else — tell us in one line",
    friendlyName: "a business that doesn't fit the usual boxes (yet)",
  },
] as const;

export function findVertical(id: string | null | undefined): Vertical | null {
  if (!id) return null;
  return VERTICALS.find((v) => v.id === id) ?? null;
}
