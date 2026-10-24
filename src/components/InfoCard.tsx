import { site, hours } from "@/data/site";

export default function InfoCard() {
  return (
    <div className="info-card">
      <h3>Hours</h3>
      <ul className="hours-list">
        {hours.map((h) => (
          <li key={h.day}>
            <span>{h.day}</span>
            <span>{h.time}</span>
          </li>
        ))}
      </ul>
      <div className="divider" />
      <h3>Find us</h3>
      <address>
        {site.address}
        <br />
        {site.city}
      </address>
      <p className="contact-line">
        <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
      </p>
      <p className="contact-line">
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  );
}
