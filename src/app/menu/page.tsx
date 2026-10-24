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
      <div className="wrap menu-head">
        <Reveal as="div">
          <span className="kicker"><i aria-hidden="true" />The menu</span>
          <h1 style={{ marginTop: "1rem", fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 600, letterSpacing: "-.02em" }}>
            Short, seasonal, wood-fired.
          </h1>
          <p style={{ marginTop: "1rem", color: "var(--muted)", maxWidth: "50ch", marginInline: "auto" }}>
            The menu changes with what&apos;s in season. This is what&apos;s on it this week.
          </p>
          <nav className="menu-jump" aria-label="Jump to section">
            {menu.map((s) => (
              <a key={s.id} href={`#${s.id}`}>{s.title}</a>
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
