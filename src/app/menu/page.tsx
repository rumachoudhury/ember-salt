import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MenuSectionBlock from "@/components/MenuSectionBlock";
import { menu } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Menu — ${site.name}`,
  description: "A short, seasonal, wood-fired menu.",
};

export default function MenuPage() {
  return (
    <main id="main">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)] pt-[clamp(3rem,7vw,5rem)] pb-6 text-center">
        <Reveal as="div">
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] text-ember-3 uppercase"><i className="size-[7px] rounded-full bg-ember-2" aria-hidden="true" />The menu</span>
          <h1 className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-semibold">
            Short, seasonal, wood-fired.
          </h1>
          <p className="menu-intro">
            The menu changes with what&apos;s in season. This is what&apos;s on it this week.
          </p>
          <nav className="mt-7 flex flex-wrap justify-center gap-[0.6rem]" aria-label="Jump to section">
            {menu.map((s) => (
              <a className="rounded-full border border-line px-[1.1rem] py-2 text-[0.88rem] font-semibold text-muted no-underline transition-colors hover:border-ember hover:text-ink" key={s.id} href={`#${s.id}`}>{s.title}</a>
            ))}
          </nav>
        </Reveal>
      </div>

      {menu.map((section) => (
        <MenuSectionBlock section={section} key={section.id} />
      ))}
    </main>
  );
}
