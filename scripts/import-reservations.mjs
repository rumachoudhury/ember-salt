import { readFile } from "node:fs/promises";
import path from "node:path";
import postgres from "postgres";

const filePath = path.join(process.cwd(), "data", "reservations.json");
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Set DATABASE_URL before importing reservations.");
}

const contents = await readFile(filePath, "utf8");
const reservations = JSON.parse(contents);

if (!Array.isArray(reservations)) {
  throw new Error("The local reservations file must contain a JSON array.");
}

const sql = postgres(connectionString, { max: 1, prepare: false });
let imported = 0;

try {
  await sql.begin(async (transaction) => {
    for (const reservation of reservations) {
      await transaction`
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
          ${reservation.id},
          ${reservation.name},
          ${reservation.email},
          ${reservation.date},
          ${reservation.time},
          ${reservation.party},
          ${reservation.notes ?? ""},
          ${reservation.receivedAt}
        )
        ON CONFLICT (id) DO NOTHING
      `;
      imported += 1;
    }
  });
  console.info(`Reservation import complete. Processed ${imported} records.`);
} finally {
  await sql.end();
}
