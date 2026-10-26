import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-6 text-[0.85rem] text-muted">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-[clamp(1.25rem,5vw,3rem)]">
        <span>&copy; {new Date().getFullYear()} {site.name}</span>
        <span>
          {site.address}, {site.city} &middot; <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a> &middot; <a href={site.instagram}>Instagram</a>
        </span>
      </div>
    </footer>
  );
}
