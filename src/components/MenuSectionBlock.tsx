import Reveal from "./Reveal";
import type { MenuSection } from "@/data/menu";

export default function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="menu-section wrap" id={section.id}>
      <Reveal as="div">
        <h2>{section.title}</h2>
        {section.note && <p className="menu-note">{section.note}</p>}
      </Reveal>
      <div className="menu-list">
        {section.dishes.map((dish, i) => (
          <Reveal as="div" className="menu-row" delay={i % 5} key={dish.name}>
            <img className="menu-photo" src={dish.image} alt={dish.name} loading="lazy" />
            <div className="left">
              <div className="name-line">
                <h3>{dish.name}</h3>
                {dish.tag && <span className={`pill ${dish.tag}`}>{dish.tag}</span>}
              </div>
              <p>{dish.description}</p>
            </div>
            <span className="price">{dish.price}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
