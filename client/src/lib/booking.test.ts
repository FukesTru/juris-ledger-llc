import { describe, expect, it } from "vitest";
import { buildAcuityUrl, parseGhlFormSubmission } from "./booking";

const BOOKING_URL = "https://JurisLedgerFrances.as.me/";

describe("buildAcuityUrl", () => {
  it("returns the booking page as-is when there is no lead", () => {
    expect(buildAcuityUrl(BOOKING_URL)).toBe(
      "https://jurisledgerfrances.as.me/"
    );
    expect(buildAcuityUrl(BOOKING_URL, null)).toBe(
      "https://jurisledgerfrances.as.me/"
    );
  });

  it("pre-fills the lead's details as Acuity query parameters", () => {
    const url = new URL(
      buildAcuityUrl(BOOKING_URL, {
        firstName: "Jane",
        lastName: "Van Der Berg",
        email: "jane+law@example.com",
        phone: "+1 (240) 555-0100",
      })
    );
    expect(Object.fromEntries(url.searchParams)).toEqual({
      firstName: "Jane",
      lastName: "Van Der Berg",
      email: "jane+law@example.com",
      phone: "+1 (240) 555-0100",
    });
  });

  it("leaves out details the lead did not give", () => {
    expect(buildAcuityUrl(BOOKING_URL, { email: "jane@example.com" })).toBe(
      "https://jurisledgerfrances.as.me/?email=jane%40example.com"
    );
  });
});

describe("parseGhlFormSubmission", () => {
  it("reads the contact from a submission message", () => {
    const message = [
      "set-sticky-contacts",
      "_ud",
      JSON.stringify({
        first_name: "Jane",
        last_name: "Doe",
        email: " jane@example.com ",
        phone: "+12405550100",
        company_name: "Doe Law LLC",
      }),
    ];
    expect(parseGhlFormSubmission(message)).toEqual({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      phone: "+12405550100",
    });
  });

  it("accepts an object payload with camelCase keys", () => {
    const message = [
      "set-sticky-contacts",
      { firstName: "Sam", lastName: "Lee", email: "sam@example.com" },
    ];
    expect(parseGhlFormSubmission(message)).toEqual({
      firstName: "Sam",
      lastName: "Lee",
      email: "sam@example.com",
    });
  });

  it("splits a full name when first and last names are missing", () => {
    const message = [
      "set-sticky-contacts",
      "_ud",
      JSON.stringify({ full_name: "Mary Anne Smith", email: "m@example.com" }),
    ];
    expect(parseGhlFormSubmission(message)).toEqual({
      firstName: "Mary",
      lastName: "Anne Smith",
      email: "m@example.com",
    });
  });

  it("still reports a submission when no contact details come with it", () => {
    expect(parseGhlFormSubmission(["set-sticky-contacts"])).toEqual({});
    expect(
      parseGhlFormSubmission(["set-sticky-contacts", "_ud", "not json"])
    ).toEqual({});
  });

  it("ignores every other message", () => {
    const others: unknown[] = [
      ["fetch-sticky-contacts", "_ud"],
      ["highlevel.setHeight", { height: 542 }],
      { type: "set-sticky-contacts" },
      "set-sticky-contacts",
      "sizing:800",
      [],
      null,
      undefined,
    ];
    for (const data of others) {
      expect(parseGhlFormSubmission(data)).toBeNull();
    }
  });
});
