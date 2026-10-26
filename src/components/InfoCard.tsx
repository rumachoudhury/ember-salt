import { site, hours } from "@/data/site";

export default function InfoCard() {
  return (
    <div className="rounded-[18px] border border-line bg-surface p-[clamp(1.75rem,4vw,2.5rem)]">
      <h3 className="font-serif text-xl font-semibold">Hours</h3>
      <ul className="mt-5 grid gap-3">
        {hours.map((h) => (
          <li className="flex justify-between gap-4 text-muted" key={h.day}>
            <span>{h.day}</span>
            <span>{h.time}</span>
          </li>
        ))}
      </ul>
      <div className="my-6 border-t border-line" />
      <h3 className="font-serif text-xl font-semibold">Find us</h3>
      <address className="mt-3 text-muted not-italic">
        {site.address}
        <br />
        {site.city}
      </address>
      <p className="mt-3 text-muted">
        <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
      </p>
      <p className="mt-2 text-muted">
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  );
}
