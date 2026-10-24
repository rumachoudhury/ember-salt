import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal as="div" className="cta-band">
          <h2>Join us by the fire.</h2>
          <p>{site.address}, {site.city} &middot; {site.phone}</p>
          <div className="actions">
            <Link className="btn primary" href="/reservations">
              Reserve a table
            </Link>
            <Link className="btn" href="/menu">
              See the full menu
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
