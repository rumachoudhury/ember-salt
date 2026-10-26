import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="py-[clamp(4rem,9vw,6.5rem)]">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)]">
        <Reveal as="div" className="cta-bg rounded-3xl border border-white/10 bg-center bg-cover px-[clamp(2.5rem,6vw,4rem)] py-[clamp(2.5rem,6vw,4rem)] text-center shadow-[0_28px_64px_rgba(0,0,0,0.18)]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ember-2">Contact Us</p>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">Join us by the fire.</h2>
          <p className="mt-[0.8rem] text-ink/80">{site.address}, {site.city} &middot; {site.phone}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-ink/80">
            <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-ink no-underline transition hover:border-ember hover:text-ink">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-ink no-underline transition hover:border-ember hover:text-ink">
              {site.email}
            </a>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-ink no-underline transition hover:border-ember hover:text-ink">
              Open map
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-[0.9rem]">
            <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-br from-ember-3 to-ember-2 px-6 py-[0.8rem] text-[0.95rem] font-bold tracking-[0.04em] text-[var(--on-ember)] uppercase no-underline transition hover:-translate-y-0.5 hover:brightness-105" href="/reservations">
              Reserve a table
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-ink/[0.02] px-6 py-[0.8rem] text-[0.95rem] font-bold tracking-[0.04em] text-ink uppercase no-underline transition hover:-translate-y-0.5 hover:border-ember-2" href="/menu">
              See the full menu
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
