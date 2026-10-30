import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PrivateEventInquiryForm from "@/components/PrivateEventInquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Event Inquiry — ${site.name}`,
  description: `Tell us about your private event at ${site.name}.`,
};

export default function PrivateEventInquiryPage() {
  return (
    <main id="main" className="event-inquiry-page">
      <div className="mx-auto max-w-[920px] px-[clamp(1.25rem,5vw,3rem)] py-[clamp(2.5rem,6vw,4.5rem)]">
        <Reveal as="section" className="event-inquiry-heading">
          <Link className="event-back-link" href="/private-events">
            Back to private events
          </Link>
          <p className="contact-eyebrow">Let&apos;s plan something memorable</p>
          <h1>Private event inquiry</h1>
          <p>
            Share a few details and our team will be in touch to discuss your
            gathering.
          </p>
        </Reveal>

        <Reveal as="section" delay={1}>
          <PrivateEventInquiryForm />
        </Reveal>
      </div>
    </main>
  );
}
