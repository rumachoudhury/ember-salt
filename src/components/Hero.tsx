import Link from "next/link";
import Embers from "./Embers";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <Embers />
      <div className="wrap hero-layout">
        <div className="hero-copy">
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

        <div className="hero-visual" aria-label="Restaurant food and dining imagery">
          <div className="photo-card tall">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
              alt="Plated restaurant dish with fire-roasted ingredients"
            />
          </div>
          <div className="photo-card small">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Decorated restaurant table setting"
            />
          </div>
          <div className="floating-note">
            <strong>Chef&apos;s tasting</strong>
            <span>Wood-fired menu • 7 courses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
