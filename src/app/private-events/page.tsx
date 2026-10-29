import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Private Events — ${site.name}`,
  description: `Plan a private gathering around the hearth at ${site.name}.`,
};

const eventEmail = `mailto:${site.email}?subject=${encodeURIComponent("Private event inquiry")}&body=${encodeURIComponent("Hello Ember & Salt,\n\nI'm interested in hosting a private event.\n\nPreferred date:\nEstimated guest count:\nOccasion:\nAdditional details:\n")}`;

export default function PrivateEventsPage() {
  return (
    <main id="main" className="event-page">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,7vw,5rem)]">
        <Reveal as="section" className="event-heading">
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] text-ember-3 uppercase">
            <i className="size-[7px] rounded-full bg-ember-2" aria-hidden="true" />
            Gather around the hearth
          </span>
          <h1>Private events</h1>
          <p>Make room for good food, warm company, and a celebration worth lingering over.</p>
        </Reveal>

        <div className="event-layout">
          <Reveal as="div" className="event-photo">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85"
              alt="Warmly set restaurant table ready for an evening gathering"
            />
          </Reveal>
          <Reveal as="section" className="event-copy" delay={1}>
            <p className="contact-eyebrow">A gathering with its own rhythm</p>
            <h2>Bring everyone to the table.</h2>
            <p>
              From milestone dinners to evenings with colleagues and friends, we&apos;ll help you shape a gathering around seasonal cooking and the open hearth.
            </p>
            <p>
              Tell us your preferred date, group size, and what you&apos;re celebrating. Our team will follow up to discuss availability and the right arrangements for your event.
            </p>
            <a className="contact-link" href={eventEmail}>Inquire about an event</a>
            <p className="event-alternative">
              Prefer to talk? <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`}>{site.phone}</a>
            </p>
          </Reveal>
        </div>

        <div className="event-footer">
          <span>{site.address}, {site.city}</span>
          <Link href="/">Back to Ember &amp; Salt</Link>
        </div>
      </div>
    </main>
  );
}