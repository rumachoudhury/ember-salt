# Ember & Salt

A restaurant website built with **Next.js (App Router)**, **React**, **TypeScript** and **Tailwind CSS v4**.
Modern wood-fired American cooking — three pages: Home, Menu and Reservations.

## Run it in VS Code

1. Install [Node.js](https://nodejs.org) 20 or newer.
2. Open this folder in VS Code (`File > Open Folder`, or `code .` in a terminal here).
3. In the terminal:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000. Saved changes reload automatically.

The project uses Tailwind CSS v4. Most component styling lives in `className`
utilities; `src/app/globals.css` keeps the shared theme tokens and custom hero,
ember, and reveal effects.

Other commands:

```bash
npm run build       # production build
npm run start        # serve the production build
npm run typecheck    # check TypeScript without building
```

## Where to edit things

| I want to change...                      | Edit this file                       |
| ------------------------------------------ | -------------------------------------- |
| Restaurant name, hours, address, phone    | `src/data/site.ts`                    |
| Menu items and sections                  | `src/data/menu.ts`                     |
| Home page sections                       | `src/components/Hero.tsx`, `AboutStrip.tsx`, `Testimonial.tsx`, `CtaBand.tsx` |
| Signature dishes shown on the home page  | Set `tag: "signature"` on a dish in `src/data/menu.ts` |
| Reservation form fields/behavior          | `src/components/ReservationForm.tsx`   |
| Reservation database schema              | `database/schema.sql`                 |
| Colors and fonts                         | `src/app/globals.css` (theme tokens near the top) |
| Component layout and spacing             | Tailwind classes in the relevant `.tsx` component |

### Adding or editing menu items

Open `src/data/menu.ts`. Each section has an `id`, a `title`, and a `dishes` array:

```ts
{ name: "Grilled peach salad", description: "Burrata, basil, aged balsamic", price: "$16", tag: "new" }
```

`tag` is optional: `"signature"` (shown on the home page too), `"new"`, or `"veg"`.

### Database and email

Production reservations use **Neon PostgreSQL**. Create a Neon project and use
its production branch. In Neon, copy the pooled connection string and configure
it as `DATABASE_URL` in the Vercel project settings. For local development, set
`DATABASE_URL` in `.env.local`; never commit real database credentials.

Before accepting reservations, run `database/schema.sql` in the Neon SQL Editor
for the production database. To import existing local bookings from
`data/reservations.json`, set `DATABASE_URL`, apply the schema, then run:

```bash
npm run import:reservations
```

The import is safe to rerun; existing reservation IDs are skipped. Keep the
local JSON file until you verify the import.

Email is sent through **Resend**. Verify a sender domain in Resend, create an
API key, then configure these Vercel environment variables:

| Variable | Purpose | Vercel type |
| --- | --- | --- |
| `RESEND_API_KEY` | Resend API credential | Secret |
| `RESEND_FROM` | Sender address on the verified domain | Config |
| `RESERVATION_EMAIL` | Inbox for reservation notifications | Config |
| `PRIVATE_EVENT_EMAIL` | Inbox for private-event notifications | Config |

Reservation submissions send a request acknowledgement to the guest and a
notification to the restaurant. The guest email is not a booking confirmation;
staff must confirm availability. Event inquiries send a similar acknowledgement
and staff notification. Do not put secret values in this file or commit them.

## Project structure

```
src/
  app/
    layout.tsx              page shell, fonts
    page.tsx                 home page
    globals.css               all styles and design tokens
    menu/page.tsx             menu page
    reservations/page.tsx     reservations page
  components/
    Header.tsx  Footer.tsx  Hero.tsx  Embers.tsx  Reveal.tsx
    SignatureDishes.tsx  AboutStrip.tsx  Testimonial.tsx  CtaBand.tsx
    MenuSectionBlock.tsx  ReservationForm.tsx  InfoCard.tsx
  data/
    site.ts    name, tagline, hours, address, contact info
    menu.ts     all menu sections and dishes
  hooks/
    useRevealOnce.ts   scroll-reveal animation hook
    cssVars.ts          typed helper for CSS custom properties
```

## Deploy on Vercel

The production site is deployed from the `main` branch on [Vercel](https://vercel.com).
Import the GitHub repository, use the repository root as the project root, and
add the production environment variables listed above in **Project Settings →
Environment Variables**. Also configure `NEXT_PUBLIC_SITE_URL` with the public
Vercel URL, `NEXT_PUBLIC_RESERVATION_EMAIL`, and `NEXT_PUBLIC_INSTAGRAM_URL` as
needed. Redeploy after changing environment variables. Keep secret values only
in Vercel, not in GitHub or this README.

## Notes

- All copy (menu, hours, address, testimonial) is placeholder content — update
  `src/data/site.ts` and `src/data/menu.ts` with your real details.
- Fonts (Fraunces and Work Sans) load from Google Fonts in `src/app/layout.tsx`,
  so the first load needs an internet connection.
- The floating embers in the hero and all scroll-reveal animations respect
  `prefers-reduced-motion` automatically.
