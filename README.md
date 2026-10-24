# Ember & Salt

A restaurant website built with **Next.js (App Router)**, **React** and **TypeScript**.
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
| Colors, fonts, spacing                   | `src/app/globals.css` (`:root` at top) |

### Adding or editing menu items

Open `src/data/menu.ts`. Each section has an `id`, a `title`, and a `dishes` array:

```ts
{ name: "Grilled peach salad", description: "Burrata, basil, aged balsamic", price: "$16", tag: "new" }
```

`tag` is optional: `"signature"` (shown on the home page too), `"new"`, or `"veg"`.

### The reservation form

`src/components/ReservationForm.tsx` validates the fields and shows a confirmation
message, but doesn't send the booking anywhere yet. Wire its `onSubmit` handler up
to a real booking provider (Tock, OpenTable, Resy) or your own API route when
you're ready to take live reservations.

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

## Deploy

Push the folder to GitHub, then import the repo on [Vercel](https://vercel.com)
or [Netlify](https://netlify.com). Both detect Next.js automatically.

## Notes

- All copy (menu, hours, address, testimonial) is placeholder content — update
  `src/data/site.ts` and `src/data/menu.ts` with your real details.
- Fonts (Fraunces and Work Sans) load from Google Fonts in `src/app/layout.tsx`,
  so the first load needs an internet connection.
- The floating embers in the hero and all scroll-reveal animations respect
  `prefers-reduced-motion` automatically.
