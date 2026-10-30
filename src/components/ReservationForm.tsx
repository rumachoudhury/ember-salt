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

    if (
      !payload.name ||
      !payload.email ||
      !payload.date ||
      !payload.time ||
      !payload.party
    ) {
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

      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send reservation request.");
      }

      setStatus(
        result.message ??
          `Thanks, ${payload.name.split(" ")[0]} — your request for ${payload.party} on ${payload.date} at ${payload.time} is on the list.`,
      );
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setStatus(message);
    } finally {
      setIsSubmitting(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus(""), 7000);
    }
  };

  return (
    <form
      className="rounded-[18px] border border-line bg-surface p-[clamp(1.75rem,4vw,2.5rem)]"
      onSubmit={onSubmit}
    >
      <h2 className="font-serif text-2xl font-semibold">Request a table</h2>
      <p className="mt-2 text-[0.95rem] text-muted">
        We&apos;ll confirm by email within a few hours. For parties over 8, call
        us directly.
      </p>

      <div className="mt-6 flex flex-col gap-[0.45rem]">
        <label
          className="text-[0.85rem] font-semibold text-muted"
          htmlFor="name"
        >
          Full name
        </label>
        <input
          className="rounded-[10px] border border-line bg-bg-2 px-[0.9rem] py-3 text-[0.95rem] text-ink focus-visible:outline-2 focus-visible:outline-ember"
          id="name"
          name="name"
          type="text"
          placeholder="Jordan Lee"
          required
        />
      </div>

      <div className="mt-6 flex flex-col gap-[0.45rem]">
        <label
          className="text-[0.85rem] font-semibold text-muted"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="rounded-[10px] border border-line bg-bg-2 px-[0.9rem] py-3 text-[0.95rem] text-ink focus-visible:outline-2 focus-visible:outline-ember"
          id="email"
          name="email"
          type="email"
          placeholder="you@email.com"
          required
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 min-[481px]:grid-cols-2">
        <div className="flex flex-col gap-[0.45rem]">
          <label
            className="text-[0.85rem] font-semibold text-muted"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="rounded-[10px] border border-line bg-bg-2 px-[0.9rem] py-3 text-[0.95rem] text-ink focus-visible:outline-2 focus-visible:outline-ember"
            id="date"
            name="date"
            type="date"
            min={today}
            required
          />
        </div>
        <div className="flex flex-col gap-[0.45rem]">
          <label
            className="text-[0.85rem] font-semibold text-muted"
            htmlFor="time"
          >
            Time
          </label>
          <select
            className="rounded-[10px] border border-line bg-bg-2 px-[0.9rem] py-3 text-[0.95rem] text-ink focus-visible:outline-2 focus-visible:outline-ember"
            id="time"
            name="time"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
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

      <div className="mt-6 flex flex-col gap-[0.45rem]">
        <label
          className="text-[0.85rem] font-semibold text-muted"
          htmlFor="party"
        >
          Party size
        </label>
        <select
          className="rounded-[10px] border border-line bg-bg-2 px-[0.9rem] py-3 text-[0.95rem] text-ink focus-visible:outline-2 focus-visible:outline-ember"
          id="party"
          name="party"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select
          </option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex flex-col gap-[0.45rem]">
        <label
          className="text-[0.85rem] font-semibold text-muted"
          htmlFor="notes"
        >
          Notes (optional)
        </label>
        <textarea
          className="rounded-[10px] border border-line bg-bg-2 px-[0.9rem] py-3 text-[0.95rem] text-ink focus-visible:outline-2 focus-visible:outline-ember"
          id="notes"
          name="notes"
          rows={3}
          placeholder="Allergies, special occasion, seating preference..."
        />
      </div>

      <button
        className="mt-6 inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-ember-3 to-ember-2 px-6 py-[0.8rem] text-[0.95rem] font-bold tracking-[0.04em] text-[var(--on-ember)] uppercase shadow-[0_18px_32px_-20px_rgba(220,160,102,0.8)] transition hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request reservation"}
      </button>
      <p
        className="mt-4 min-h-6 text-[0.9rem] text-ember-3"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
}
