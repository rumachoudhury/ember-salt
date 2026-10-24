"use client";

import { useRef, useState, type FormEvent } from "react";

/**
 * Demo-only form: validates and shows a confirmation message, but doesn't send
 * the booking anywhere yet. Wire the onSubmit handler up to a booking provider
 * (Tock, OpenTable, Resy, or your own API route) when you're ready to take real
 * reservations.
 */
export default function ReservationForm() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLSelectElement).value;
    const party = (form.elements.namedItem("party") as HTMLSelectElement).value;

    const ok = Boolean(name && date && time && party);
    setStatus(
      ok
        ? `Thanks, ${name.split(" ")[0]} — we've noted a table for ${party} on ${date} at ${time}. We'll confirm by email shortly.`
        : "Please fill in your name, date, time and party size."
    );
    if (ok) form.reset();
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 7000);
  };

  return (
    <form className="res-form" onSubmit={onSubmit}>
      <h2>Request a table</h2>
      <p className="sub">We&apos;ll confirm by email within a few hours. For parties over 8, call us directly.</p>

      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" placeholder="Jordan Lee" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" required />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" min={today} required />
        </div>
        <div className="field">
          <label htmlFor="time">Time</label>
          <select id="time" name="time" required defaultValue="">
            <option value="" disabled>Select</option>
            <option>5:30 PM</option>
            <option>6:00 PM</option>
            <option>6:30 PM</option>
            <option>7:00 PM</option>
            <option>7:30 PM</option>
            <option>8:00 PM</option>
            <option>8:30 PM</option>
            <option>9:00 PM</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="party">Party size</label>
        <select id="party" name="party" required defaultValue="">
          <option value="" disabled>Select</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="notes">Notes (optional)</label>
        <textarea id="notes" name="notes" rows={3} placeholder="Allergies, special occasion, seating preference..." />
      </div>

      <button className="btn primary" type="submit">Request reservation</button>
      <p className="res-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
