import Reveal from "./Reveal";
import { menu } from "@/data/menu";

const flame = (
  <svg className="size-4 fill-ember-2" viewBox="0 0 24 24"><path d="M12 2c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 .5 2 1.5 2.5 2 1.5-.5-2 0-4.5 1-6.5z" /></svg>
);

export default function SignatureDishes() {
  const signatures = menu.flatMap((s) => s.dishes.filter((d) => d.tag === "signature"))
    .slice(0, 4);

  return (
    <section className="scroll-mt-[90px] py-[clamp(4rem,9vw,6.5rem)]" id="signatures">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)]">
        <Reveal as="div" className="mx-auto max-w-[56ch] text-center">
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] text-ember-3 uppercase"><i className="size-[7px] rounded-full bg-ember-2" aria-hidden="true" />Fire-forged</span>
          <h2 className="mt-[0.85rem] font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-semibold uppercase">From the hearth</h2>
          <p className="mt-[0.9rem] text-muted">Four dishes that define the table, season after season.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 min-[760px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {signatures.map((dish, i) => (
            <Reveal as="div" className="rounded-[18px] border border-line bg-surface p-7 transition duration-300 ease-brand hover:-translate-y-1 hover:border-ember/50" delay={i} key={dish.name}>
              <span className="mb-[1.1rem] grid size-[34px] place-items-center rounded-[9px] bg-ember/20" aria-hidden="true">{flame}</span>
              <h3 className="font-serif text-[1.2rem] font-semibold">{dish.name}</h3>
              <p className="mt-2 text-[0.95rem] leading-[1.55] text-muted">{dish.description}</p>
              <div className="mt-4 font-serif text-[1.1rem] text-ember-2">{dish.price}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
