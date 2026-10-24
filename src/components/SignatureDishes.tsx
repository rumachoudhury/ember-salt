import Reveal from "./Reveal";
import { menu } from "@/data/menu";

const flame = (
  <svg viewBox="0 0 24 24"><path d="M12 2c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 .5 2 1.5 2.5 2 1.5-.5-2 0-4.5 1-6.5z" /></svg>
);

export default function SignatureDishes() {
  const signatures = menu.flatMap((s) => s.dishes.filter((d) => d.tag === "signature")).slice(0, 3);

  return (
    <section className="section" id="signatures">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="kicker"><i aria-hidden="true" />Fire-forged</span>
          <h2>From the hearth</h2>
          <p>Three dishes that don&apos;t leave the menu, no matter the season.</p>
        </Reveal>
        <div className="dish-grid">
          {signatures.map((dish, i) => (
            <Reveal as="div" className="dish-card" delay={i} key={dish.name}>
              <span className="flame" aria-hidden="true">{flame}</span>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <div className="price">{dish.price}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
