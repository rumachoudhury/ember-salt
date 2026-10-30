import Reveal from "./Reveal";
import type { MenuSection } from "@/data/menu";

export default function MenuSectionBlock({
  section,
}: {
  section: MenuSection;
}) {
  return (
    <section
      className="mx-auto max-w-[1120px] scroll-mt-[90px] border-t border-line px-[clamp(1.25rem,5vw,3rem)] py-10 first:border-t-0"
      id={section.id}
    >
      <Reveal as="div">
        <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.1rem)] font-semibold">
          {section.title}
        </h2>
        {section.note && (
          <p className="mt-2 text-[0.95rem] text-muted italic">
            {section.note}
          </p>
        )}
      </Reveal>
      <div className="mt-7 grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
        {section.dishes.map((dish, i) => (
          <Reveal
            as="div"
            className="min-w-0 overflow-hidden rounded-[14px] border border-line bg-surface transition duration-300 ease-brand hover:-translate-y-1 hover:border-ember-2/55"
            delay={i % 5}
            key={dish.name}
          >
            <img
              className="block aspect-[16/10] w-full bg-surface-2 object-cover"
              src={dish.image}
              alt={dish.name}
              loading="lazy"
            />
            <div className="min-w-0 px-4 pt-4 pb-1">
              <div className="flex flex-wrap items-baseline justify-between gap-[0.6rem]">
                <h3 className="font-serif text-[1.12rem] font-semibold">
                  {dish.name}
                </h3>
                {dish.tag && (
                  <span
                    className={`rounded-full px-[0.55rem] py-[0.18rem] text-[0.68rem] font-bold tracking-[0.04em] uppercase ${dish.tag === "veg" ? "bg-green-900/30 text-green-200" : dish.tag === "new" ? "bg-green-900/30 text-green-200" : "bg-ember/25 text-ember-2"}`}
                  >
                    {dish.tag}
                  </span>
                )}
              </div>
              <p className="mt-[0.35rem] text-[0.92rem] leading-[1.5] text-muted">
                {dish.description}
              </p>
            </div>
            <span className="block px-4 pb-4 font-serif text-[1.05rem] text-ember-2">
              {dish.price}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
