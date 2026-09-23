// booking.ts — Juris Ledger
// Connects the GoHighLevel contact form to Acuity Scheduling: reads the lead's
// details from the form's submission message and pre-fills the scheduler.

export interface LeadDetails {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

// Acuity pre-fills its client form from these query parameters.
const ACUITY_PREFILL_KEYS = [
  "firstName",
  "lastName",
  "email",
  "phone",
] as const;

export function buildAcuityUrl(
  baseUrl: string,
  lead?: LeadDetails | null
): string {
  const url = new URL(baseUrl);
  for (const key of ACUITY_PREFILL_KEYS) {
    const value = lead?.[key];
    if (value) url.searchParams.set(key, value);
  }
  return url.toString();
}

/**
 * After a successful submission, GHL forms post
 * ["set-sticky-contacts", <storage key>, <contact>] to the host page so
 * form_embed.js can remember the contact. Returns the lead's details for that
 * message, or null for anything else (resizing, sticky-contact lookups, ...).
 */
export function parseGhlFormSubmission(data: unknown): LeadDetails | null {
  if (!Array.isArray(data) || data[0] !== "set-sticky-contacts") return null;

  const contact =
    data
      .slice(1)
      .map(toRecord)
      .find(record => record !== null) ?? {};

  let firstName = pick(contact, "first_name", "firstName");
  let lastName = pick(contact, "last_name", "lastName");
  const fullName = pick(contact, "full_name", "fullName", "name");
  if (!firstName && !lastName && fullName) {
    const [first, ...rest] = fullName.split(/\s+/);
    firstName = first;
    lastName = rest.join(" ") || undefined;
  }

  return {
    firstName,
    lastName,
    email: pick(contact, "email"),
    phone: pick(contact, "phone"),
  };
}

// The contact arrives either as an object or as a JSON string.
function toRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function pick(record: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}
