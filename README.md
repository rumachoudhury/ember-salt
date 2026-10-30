# Ember & Salt

A modern restaurant website built with Next.js, TypeScript, and Tailwind CSS, featuring an online reservation system powered by Neon PostgreSQL.

## Tech Stack

* **Frontend:** Next.js, React, TypeScript
* **Styling:** Tailwind CSS
* **Database:** Neon PostgreSQL
* **Deployment:** Vercel
* **Email:** Nodemailer (production SMTP setup pending)

## Key Features

* Responsive restaurant website
* Online reservation form
* Reservation data stored in Neon PostgreSQL
* Database integration with a managed PostgreSQL service
* Deployed on Vercel

## Live Website

https://ember-salt-ten.vercel.app/

## Database Setup

This project uses **Neon PostgreSQL** to store reservation information.

1. Create a Neon project.
2. Add the Neon connection string as `DATABASE_URL`.
3. Run the database schema to create the reservations table.
4. Configure the environment variable in Vercel.

## Environment Variables

```env
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
RESERVATION_EMAIL=
```

Add the required environment variables in your local `.env.local` file and Vercel project settings. Never commit secret credentials to GitHub.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

The project is deployed on **Vercel** and connected to GitHub for deployment.

---

**Built with Next.js and Neon PostgreSQL.**

