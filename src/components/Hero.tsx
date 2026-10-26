import Link from "next/link";
import Embers from "./Embers";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden border-b border-line py-[clamp(4rem,9vw,7rem)]">
      <Embers />
      <div className="relative z-[1] mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-[clamp(2rem,5vw,4rem)] px-[clamp(1.25rem,5vw,3rem)] min-[861px]:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center min-[861px]:text-left">
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] text-ember-3 uppercase">
            <i className="size-[7px] rounded-full bg-ember-2" aria-hidden="true" />
            Open hearth, every night
          </span>
          <h1 className="mt-[1.1rem] font-serif text-[clamp(3rem,6.4vw,6rem)] leading-[0.92] font-semibold">{site.tagline}</h1>
          <p className="mt-[1.4rem] max-w-[42ch] text-[1.18rem] text-ink/80">{site.description}</p>
          <div className="mt-[2.1rem] flex flex-wrap justify-center gap-[0.9rem] min-[861px]:justify-start">
            <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-br from-ember-3 to-ember-2 px-6 py-[0.8rem] text-[0.95rem] font-bold tracking-[0.04em] text-[var(--on-ember)] uppercase no-underline shadow-[0_18px_32px_-20px_rgba(220,160,102,0.8)] transition hover:-translate-y-0.5 hover:brightness-105" href="/reservations">
              Reserve a table
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-ink/[0.02] px-6 py-[0.8rem] text-[0.95rem] font-bold tracking-[0.04em] text-ink uppercase no-underline transition hover:-translate-y-0.5 hover:border-ember-2" href="/menu">
              View the menu
            </Link>
          </div>
        </div>

        <div className="relative grid min-h-[320px] grid-cols-[1.2fr_0.8fr] items-end gap-4 min-[861px]:min-h-[440px]" aria-label="Restaurant food and dining imagery">
          <div className="h-[320px] overflow-hidden rounded-[22px] border border-white/10 bg-bg/60 shadow-[0_26px_60px_rgba(0,0,0,0.28)] min-[861px]:h-[440px]">
            <img
              className="block size-full object-cover"
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
              alt="Plated restaurant dish with fire-roasted ingredients"
            />
          </div>
          <div className="h-[200px] translate-y-10 overflow-hidden rounded-[22px] border border-white/10 bg-bg/60 shadow-[0_26px_60px_rgba(0,0,0,0.28)] min-[861px]:h-[270px]">
            <img
              className="block size-full object-cover"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Decorated restaurant table setting"
            />
          </div>
          <div className="absolute bottom-5 left-5 flex flex-col gap-1 rounded-[14px] border border-white/10 bg-bg/75 px-4 py-[0.9rem] shadow-[0_18px_30px_rgba(0,0,0,0.22)] backdrop-blur-[10px]">
            <strong className="text-[0.82rem] tracking-[0.08em] text-ember-3 uppercase">Chef&apos;s tasting</strong>
            <span className="text-[0.82rem] text-muted">Wood-fired menu • 7 courses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
