import Reveal from "./Reveal";

export default function AboutStrip() {
  return (
    <section className="section">
      <div className="wrap strip">
        <Reveal>
          <h2>Everything touches the fire.</h2>
          <p>
            Ember &amp; Salt is built around a single open hearth. There&apos;s no gas range in the
            kitchen — if it&apos;s on the menu, it was cooked over hardwood embers, from the
            flatbread to the dessert.
          </p>
          <p>
            The dining room wraps around the fire itself, so the kitchen is never more than a few
            feet from your table.
          </p>
          <div className="stats">
            <div>
              <b>2015</b>
              <span>Open since</span>
            </div>
            <div>
              <b>100%</b>
              <span>Wood-fired menu</span>
            </div>
            <div>
              <b>28-day</b>
              <span>Dry-aged beef</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="flame-art">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Warm restaurant dining scene with a decorated table"
            />
            <span className="glow" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
