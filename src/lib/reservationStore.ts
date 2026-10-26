import crypto from "node:crypto";
import postgres from "postgres";

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

type ReservationRow = Omit<ReservationEntry, "receivedAt"> & {
  receivedAt: Date | string;
};

let database: ReturnType<typeof postgres> | undefined;

function getDatabase() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL must be configured to use reservation storage.");
  }

  database ??= postgres(connectionString, { max: 1, prepare: false });
  return database;
}

function toReservationEntry(row: ReservationRow): ReservationEntry {
  return {
    ...row,
    receivedAt:
      row.receivedAt instanceof Date
        ? row.receivedAt.toISOString()
        : new Date(row.receivedAt).toISOString(),
  };
}

export function normalizeReservation(
  input: ReservationInput,
): ReservationResult {
  const errors: string[] = [];

  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim();
  const date = String(input.date ?? "").trim();
  const time = String(input.time ?? "").trim();
  const notes = String(input.notes ?? "").trim();
  const partyValue = Number(input.party ?? 0);

  if (!name) errors.push("Name is required.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("Please provide a valid email address.");
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
  const sql = getDatabase();
  const rows = (await sql`
    SELECT
      id,
      name,
      email,
      reservation_date AS date,
      reservation_time AS time,
      party,
      notes,
      received_at AS "receivedAt"
    FROM reservations
    ORDER BY received_at DESC
  `) as unknown as ReservationRow[];

  return rows.map(toReservationEntry);
}

export async function saveReservation(input: ReservationInput) {
  const normalized = normalizeReservation(input);

  if (!normalized.valid) {
    return { valid: false, errors: normalized.errors } as const;
  }

  const sql = getDatabase();
  await sql`
    INSERT INTO reservations (
      id,
      name,
      email,
      reservation_date,
      reservation_time,
      party,
      notes,
      received_at
    ) VALUES (
      ${normalized.id},
      ${normalized.name},
      ${normalized.email},
      ${normalized.date},
      ${normalized.time},
      ${normalized.party},
      ${normalized.notes},
      ${normalized.receivedAt}
    )
  `;

  return { valid: true, reservation: normalized } as const;
}
