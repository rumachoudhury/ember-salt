import Reveal from "./Reveal";

export default function AboutStrip() {
  return (
    <section className="scroll-mt-[90px] py-[clamp(4rem,9vw,6.5rem)]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-[clamp(2rem,6vw,4rem)] px-[clamp(1.25rem,5vw,3rem)] min-[821px]:grid-cols-2">
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-semibold">Everything touches the fire.</h2>
          <p className="mt-[1.1rem] max-w-[48ch] text-muted">
            Ember &amp; Salt is built around a single open hearth. There&apos;s no gas range in the
            kitchen — if it&apos;s on the menu, it was cooked over hardwood embers, from the
            flatbread to the dessert.
          </p>
          <p className="mt-[1.1rem] max-w-[48ch] text-muted">
            The dining room wraps around the fire itself, so the kitchen is never more than a few
            feet from your table.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <b className="block font-serif text-[1.8rem] text-ember-2">2015</b>
              <span className="text-[0.85rem] text-muted">Open since</span>
            </div>
            <div>
              <b className="block font-serif text-[1.8rem] text-ember-2">100%</b>
              <span className="text-[0.85rem] text-muted">Wood-fired menu</span>
            </div>
            <div>
              <b className="block font-serif text-[1.8rem] text-ember-2">28-day</b>
              <span className="text-[0.85rem] text-muted">Dry-aged beef</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-line bg-gradient-to-br from-[#3a2318] to-bg shadow-[0_26px_60px_rgba(0,0,0,0.18)]">
            <img
              className="block size-full object-cover"
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
