"use client";

import { useRef, useState, type FormEvent } from "react";

export default function ReservationForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      date: String(formData.get("date") ?? "").trim(),
      time: String(formData.get("time") ?? "").trim(),
      party: Number(formData.get("party") ?? 0),
      notes: String(formData.get("notes") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.date || !payload.time || !payload.party) {
      setStatus("Please fill in your name, email, date, time and party size.");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus(""), 7000);
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your reservation request...");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send reservation request.");
      }

      setStatus(
        result.message ?? `Thanks, ${payload.name.split(" ")[0]} — your request for ${payload.party} on ${payload.date} at ${payload.time} is on the list.`
      );
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus(message);
    } finally {
      setIsSubmitting(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus(""), 7000);
    }
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

      <button className="btn primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request reservation"}
      </button>
      <p className="res-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
