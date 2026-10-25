import test from "node:test";
import assert from "node:assert/strict";

import {
  normalizeReservation,
  type ReservationEntry,
} from "./reservationStore.ts";

test("normalizeReservation strips invalid values and keeps valid booking details", () => {
  const input = {
    name: " Jordan Lee ",
    email: " jordan@example.com ",
    date: "2026-10-30",
    time: "7:00 PM",
    party: "4",
    notes: " Window seat ",
  };

  const result = normalizeReservation(input);
  assert.equal(result.valid, true);

  if (!result.valid) {
    throw new Error("Expected valid reservation");
  }

  assert.equal(result.name, "Jordan Lee");
  assert.equal(result.email, "jordan@example.com");
  assert.equal(result.date, "2026-10-30");
  assert.equal(result.time, "7:00 PM");
  assert.equal(result.party, 4);
  assert.equal(result.notes, "Window seat");
  assert.ok(result.id.length > 0);
  assert.ok(result.receivedAt.length > 0);
});

test("normalizeReservation rejects invalid payloads", () => {
  const result = normalizeReservation({
    name: "",
    email: "invalid-email",
    date: "",
    time: "",
    party: "0",
  });

  assert.equal(result.valid, false);
  if (result.valid) {
    throw new Error("Expected invalid reservation");
  }

  assert.ok(Array.isArray(result.errors));
});
