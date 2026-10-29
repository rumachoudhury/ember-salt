import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="contact-section py-[clamp(4rem,9vw,6.5rem)]">
      <div className="mx-auto max-w-[1320px] px-[clamp(1.25rem,5vw,3rem)]">
        <div className="contact-options">
          <Reveal as="article" className="contact-option">
            <svg className="contact-symbol" viewBox="0 0 220 170" aria-hidden="true">
              <circle cx="110" cy="90" r="29" fill="currentColor" />
              <path d="M38 90a72 72 0 0 1 144 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M110 10v36M70 25l18 30M150 25l-18 30M38 48l32 24M182 48l-32 24M20 88l59 4M200 88l-59 4M52 143l39-31M168 143l-39-31M83 164l19-45M137 164l-19-45" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M60 71h2m17-16h2m27-8h2m27 8h2m17 16h2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="contact-eyebrow">A table by the fire</p>
            <h2>Reservations</h2>
            <p className="contact-description">Settle in for a slow evening of seasonal cooking, glowing embers, and good company.</p>
            <Link className="contact-link" href="/reservations">Reserve a table</Link>
          </Reveal>

          <Reveal as="article" className="contact-option" delay={1}>
            <svg className="contact-symbol" viewBox="0 0 220 170" aria-hidden="true">
              <circle cx="119" cy="78" r="25" fill="currentColor" />
              <path d="M26 82c20-7 35 7 55 0s35 7 55 0 35 7 58 0M26 98c20-7 35 7 55 0s35 7 55 0 35 7 58 0M26 114c20-7 35 7 55 0s35 7 55 0 35 7 58 0" fill="none" stroke="currentColor" strokeWidth="1.3" />
              <path d="m55 143 7-2m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1m11-7 2-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="contact-eyebrow">Gather around the hearth</p>
            <h2>Private Events</h2>
            <p className="contact-description">Mark the occasion with a private dinner, a shared hearth menu, and a room of your own.</p>
            <a className="contact-link" href={`mailto:${site.email}?subject=${encodeURIComponent("Private event inquiry")}`}>Plan an event</a>
          </Reveal>
        </div>

        <div className="contact-details">
          <span>{site.address}, {site.city}</span>
          <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.mapUrl} target="_blank" rel="noreferrer">Directions</a>
        </div>
      </div>
    </section>
  );
}
