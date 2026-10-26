import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ReservationForm from "@/components/ReservationForm";
import InfoCard from "@/components/InfoCard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Reservations — ${site.name}`,
  description: `Request a table at ${site.name}.`,
};

export default function ReservationsPage() {
  return (
    <main id="main">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-[clamp(2rem,6vw,4rem)] px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,7vw,5rem)] min-[901px]:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <Reveal as="div">
          <ReservationForm />
        </Reveal>
        <Reveal as="div" delay={1}>
          <InfoCard />
        </Reveal>
      </div>
    </main>
  );
}
