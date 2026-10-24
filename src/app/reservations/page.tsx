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
      <div className="wrap res-wrap">
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
