import Link from "next/link";
import Embers from "./Embers";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <Embers />
      <div className="wrap hero-inner">
        <span className="kicker">
          <i aria-hidden="true" />
          Open hearth, every night
        </span>
        <h1>{site.tagline}</h1>
        <p className="lede">{site.description}</p>
        <div className="actions">
          <Link className="btn primary" href="/reservations">
            Reserve a table
          </Link>
          <Link className="btn" href="/menu">
            View the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
