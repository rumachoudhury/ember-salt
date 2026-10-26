CREATE TABLE IF NOT EXISTS reservations (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  reservation_date TEXT NOT NULL,
  reservation_time TEXT NOT NULL,
  party INTEGER NOT NULL CHECK (party BETWEEN 1 AND 12),
  notes TEXT NOT NULL DEFAULT '',
  received_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS reservations_received_at_idx
  ON reservations (received_at DESC);
