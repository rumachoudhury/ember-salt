import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-row">
        <span>&copy; {new Date().getFullYear()} {site.name}</span>
        <span>
          {site.address}, {site.city} &middot; <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a> &middot; <a href={site.instagram}>Instagram</a>
        </span>
      </div>
    </footer>
  );
}
