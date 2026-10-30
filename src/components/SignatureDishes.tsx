import Reveal from "./Reveal";
import { menu } from "@/data/menu";

const flame = (
  <svg className="size-4 fill-ember-2" viewBox="0 0 24 24">
    <path d="M12 2c3 4 5 6 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-5 .5 2 1.5 2.5 2 1.5-.5-2 0-4.5 1-6.5z" />
  </svg>
);

export default function SignatureDishes() {
  const signatures = menu.flatMap((section) => section.dishes).slice(0, 6);

  return (
    <section
      className="scroll-mt-[90px] py-[clamp(4rem,9vw,6.5rem)]"
      id="signatures"
    >
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)]">
        <Reveal as="div" className="mx-auto max-w-[56ch] text-center">
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] text-ember-3 uppercase">
            <i
              className="size-[7px] rounded-full bg-ember-2"
              aria-hidden="true"
            />
            Fire-forged
          </span>
          <h2 className="mt-[0.85rem] font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-semibold uppercase">
            From the hearth
          </h2>
          <p className="mt-[0.9rem] text-muted">
            Six dishes that define the table, season after season.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 min-[760px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {signatures.map((dish, i) => (
            <Reveal
              as="div"
              className="group overflow-hidden rounded-[22px] border border-line bg-surface shadow-[0_20px_50px_-28px_rgba(20,16,13,0.42)] transition duration-300 ease-brand hover:-translate-y-1 hover:border-ember/60"
              delay={i}
              key={dish.name}
            >
              <div className="relative overflow-hidden">
                <img
                  className="block aspect-[16/11] w-full object-cover transition duration-500 ease-brand group-hover:scale-[1.04]"
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,10,8,0.58)] via-transparent to-transparent" />
                <span
                  className="absolute left-4 top-4 grid size-[34px] place-items-center rounded-full bg-[rgba(15,10,8,0.55)] backdrop-blur-sm"
                  aria-hidden="true"
                >
                  {flame}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[1.28rem] font-semibold leading-tight">
                    {dish.name}
                  </h3>
                  <div className="font-serif text-[1.05rem] text-ember-2">
                    {dish.price}
                  </div>
                </div>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-muted">
                  {dish.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
