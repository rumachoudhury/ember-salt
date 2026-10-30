"use client";

import { useState, type FormEvent } from "react";

const eventStyles = [
  "On-Premise Event",
  "Large Party Reservation",
  "Drop-Off Catering",
  "Pick-Up Catering",
  "Full-Service Catering",
] as const;

const locations = [
  "Main Dining Room",
  "Private Dining Room",
  "Entire Venue",
] as const;

const referrals = [
  "EventUp",
  "Instagram",
  "Facebook",
  "Search Engine",
  "Venues by Tripleseat",
  "Email",
  "Other",
] as const;

const fieldClass =
  "w-full rounded-[8px] border border-line bg-bg-2 px-4 py-3 text-[0.95rem] text-ink outline-none transition focus:border-ember-2 focus:ring-2 focus:ring-ember-2/20";
const labelClass = "mb-2 block text-[0.82rem] font-semibold text-muted";

export default function PrivateEventInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending your event inquiry...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/private-events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your inquiry.");
      }

      setStatus(
        result.message ?? "Thank you. Your event inquiry has been sent.",
      );
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="event-inquiry-form" onSubmit={onSubmit}>
      <section className="inquiry-form-section">
        <h2>Your contact information</h2>
        <div className="inquiry-fields inquiry-fields-two">
          <div>
            <label className={labelClass} htmlFor="firstName">
              First name <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              maxLength={80}
              required
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lastName">
              Last name <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              maxLength={80}
              required
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email address <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>
          <div className="inquiry-phone-fields">
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone number <span aria-hidden="true">*</span>
              </label>
              <input
                className={fieldClass}
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={32}
                required
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="extension">
                Ext.
              </label>
              <input
                className={fieldClass}
                id="extension"
                name="extension"
                maxLength={10}
              />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="company">
              Company <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={120}
              required
            />
          </div>
          <fieldset className="inquiry-contact-preference">
            <legend className={labelClass}>
              How would you prefer to be contacted?{" "}
              <span aria-hidden="true">*</span>
            </legend>
            <div className="inquiry-choice-row">
              {["Phone", "Email", "Text"].map((choice) => (
                <label className="inquiry-choice" key={choice}>
                  <input
                    type="radio"
                    name="contactPreference"
                    value={choice}
                    required
                  />
                  <span>{choice}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <section className="inquiry-form-section">
        <h2>Availability and event style</h2>
        <div className="event-style-notes">
          <p>
            <strong>On-premise event:</strong> A private gathering at Ember
            &amp; Salt.
          </p>
          <p>
            <strong>Large party reservation:</strong> A group booking in our
            main dining room.
          </p>
          <p>
            <strong>Catering:</strong> Pick-up, drop-off, or full-service
            options can be discussed with our team.
          </p>
        </div>
        <div className="inquiry-fields inquiry-fields-two">
          <div>
            <label className={labelClass} htmlFor="eventStyle">
              Select your desired event style
            </label>
            <select
              className={fieldClass}
              id="eventStyle"
              name="eventStyle"
              defaultValue=""
            >
              <option value="" disabled>
                Select an event style
              </option>
              {eventStyles.map((style) => (
                <option key={style}>{style}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="location">
              Select location <span aria-hidden="true">*</span>
            </label>
            <select
              className={fieldClass}
              id="location"
              name="location"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a space
              </option>
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="eventDate">
              Event date <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="eventDate"
              name="eventDate"
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              required
            />
          </div>
          <div className="inquiry-fields inquiry-fields-two inquiry-times">
            <div>
              <label className={labelClass} htmlFor="startTime">
                Start time
              </label>
              <input
                className={fieldClass}
                id="startTime"
                name="startTime"
                type="time"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="endTime">
                End time
              </label>
              <input
                className={fieldClass}
                id="endTime"
                name="endTime"
                type="time"
              />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="guestCount">
              Number of people <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="guestCount"
              name="guestCount"
              type="number"
              min="1"
              max="500"
              required
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="referral">
              How did you hear about us?
            </label>
            <select
              className={fieldClass}
              id="referral"
              name="referral"
              defaultValue=""
            >
              <option value="">Select an option</option>
              {referrals.map((referral) => (
                <option key={referral}>{referral}</option>
              ))}
            </select>
          </div>
          <div className="inquiry-full-row">
            <label className={labelClass} htmlFor="eventNature">
              Nature of this event <span aria-hidden="true">*</span>
            </label>
            <input
              className={fieldClass}
              id="eventNature"
              name="eventNature"
              placeholder="Celebration, business dinner, meeting..."
              maxLength={160}
              required
            />
          </div>
          <div className="inquiry-full-row">
            <label className={labelClass} htmlFor="details">
              Additional information
            </label>
            <textarea
              className={fieldClass}
              id="details"
              name="details"
              rows={5}
              maxLength={3000}
              placeholder="Tell us anything that will help us plan your gathering."
            />
          </div>
        </div>
      </section>

      <button className="inquiry-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit event inquiry"}
      </button>
      <p className="inquiry-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
