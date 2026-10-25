import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

export type ReservationInput = {
  name?: string;
  email?: string;
  date?: string;
  time?: string;
  party?: number | string;
  notes?: string;
};

export type ReservationEntry = {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  party: number;
  notes: string;
  receivedAt: string;
};

export type ReservationResult =
  | ({ valid: true } & ReservationEntry)
  | { valid: false; errors: string[] };

const RESERVATIONS_FILE = path.join(process.cwd(), "data", "reservations.json");

async function ensureStoreFile() {
  await fs.mkdir(path.dirname(RESERVATIONS_FILE), { recursive: true });

  try {
    await fs.access(RESERVATIONS_FILE);
  } catch {
    await fs.writeFile(RESERVATIONS_FILE, "[]\n", "utf8");
  }
}

export function normalizeReservation(input: ReservationInput): ReservationResult {
  const errors: string[] = [];

  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim();
  const date = String(input.date ?? "").trim();
  const time = String(input.time ?? "").trim();
  const notes = String(input.notes ?? "").trim();
  const partyValue = Number(input.party ?? 0);

  if (!name) errors.push("Name is required.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Please provide a valid email address.");
  if (!date) errors.push("Date is required.");
  if (!time) errors.push("Reservation time is required.");
  if (!Number.isFinite(partyValue) || partyValue < 1 || partyValue > 12) {
    errors.push("Party size must be between 1 and 12 guests.");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    id: crypto.randomUUID(),
    name,
    email,
    date,
    time,
    party: partyValue,
    notes,
    receivedAt: new Date().toISOString(),
  };
}

export async function readReservations(): Promise<ReservationEntry[]> {
  await ensureStoreFile();

  try {
    const content = await fs.readFile(RESERVATIONS_FILE, "utf8");
    if (!content.trim()) return [];

    const parsed = JSON.parse(content) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is ReservationEntry => Boolean(item) && typeof item === "object");
  } catch {
    return [];
  }
}

export async function saveReservation(input: ReservationInput) {
  const normalized = normalizeReservation(input);

  if (!normalized.valid) {
    return { valid: false, errors: normalized.errors } as const;
  }

  await ensureStoreFile();
  const reservations = await readReservations();
  reservations.unshift(normalized);

  await fs.writeFile(RESERVATIONS_FILE, `${JSON.stringify(reservations, null, 2)}\n`, "utf8");

  return { valid: true, reservation: normalized } as const;
}
