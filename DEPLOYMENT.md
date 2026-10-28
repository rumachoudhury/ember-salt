# Deployment checklist for Ember & Salt

## 1. Production environment variables

Create a production `.env` file or configure the following in Vercel project settings:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_RESERVATION_EMAIL=reservations@your-domain.com
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your-handle

DATABASE_URL=postgres://user:password@host:5432/database?sslmode=require

RESERVATION_EMAIL=reservations@your-domain.com
RESERVATION_FROM="Ember & Salt <noreply@your-domain.com>"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-strong-password
```

## 2. Deploy on Vercel

1. Push the repo to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables above.
4. Choose the root project folder.
5. Deploy.

## 3. Postgres setup

Create a managed PostgreSQL database and use the connection string in `DATABASE_URL`.

The app expects a table shaped like:

```sql
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
```

## 4. Launch QA

Before announcing the site:

- verify homepage loads
- verify menu page loads
- verify reservations page loads
- submit a test reservation
- check that reservation is saved to Postgres
- confirm email is sent if SMTP is configured
- verify admin access is protected if enabled

## 5. Final content updates

Before launch, replace placeholder details with the real business info:

- restaurant name and tagline
- phone number
- email address
- Instagram handle
- address
- hours
- map link

## 6. Optional production hardening

- keep admin protected only behind `/admin`
- enable HTTPS with Vercel default domain or custom domain
- consider adding rate limiting for reservation requests
- add a simple staff dashboard for viewing reservations
