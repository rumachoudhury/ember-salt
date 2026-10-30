import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { sendEmail } from "@/lib/resend";

export const runtime = "nodejs";

const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "company",
  "contactPreference",
  "location",
  "eventDate",
  "guestCount",
  "eventNature",
] as const;

const allowedStyles = new Set([
  "",
  "On-Premise Event",
  "Large Party Reservation",
  "Drop-Off Catering",
  "Pick-Up Catering",
  "Full-Service Catering",
]);
const allowedLocations = new Set([
  "Main Dining Room",
  "Private Dining Room",
  "Entire Venue",
]);
const allowedContactMethods = new Set(["Phone", "Email", "Text"]);
const allowedReferrals = new Set([
  "",
  "EventUp",
  "Instagram",
  "Facebook",
  "Venues by Tripleseat",
  "Search Engine",
  "Email",
  "Other",
]);

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, unknown>;
    const inquiry = {
      firstName: cleanText(data.firstName, 80),
      lastName: cleanText(data.lastName, 80),
      email: cleanText(data.email, 254),
      phone: cleanText(data.phone, 32),
      extension: cleanText(data.extension, 10),
      company: cleanText(data.company, 120),
      contactPreference: cleanText(data.contactPreference, 16),
      eventStyle: cleanText(data.eventStyle, 40),
      location: cleanText(data.location, 60),
      eventDate: cleanText(data.eventDate, 10),
      startTime: cleanText(data.startTime, 5),
      endTime: cleanText(data.endTime, 5),
      guestCount: Number(data.guestCount),
      eventNature: cleanText(data.eventNature, 160),
      details: cleanText(data.details, 3000),
      referral: cleanText(data.referral, 40),
    };

    const missingField = requiredFields.find((field) => !inquiry[field]);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email);
    const validDate =
      /^\d{4}-\d{2}-\d{2}$/.test(inquiry.eventDate) &&
      !Number.isNaN(Date.parse(inquiry.eventDate));

    if (
      missingField ||
      !validEmail ||
      !validDate ||
      !Number.isInteger(inquiry.guestCount) ||
      inquiry.guestCount < 1 ||
      inquiry.guestCount > 500 ||
      !allowedStyles.has(inquiry.eventStyle) ||
      !allowedLocations.has(inquiry.location) ||
      !allowedContactMethods.has(inquiry.contactPreference) ||
      !allowedReferrals.has(inquiry.referral)
    ) {
      return NextResponse.json(
        {
          error: "Please complete all required fields with valid information.",
        },
        { status: 400 },
      );
    }

    const fullName = `${inquiry.firstName} ${inquiry.lastName}`;
    const eventInbox =
      process.env.PRIVATE_EVENT_EMAIL ??
      process.env.RESERVATION_EMAIL ??
      site.email;
    const eventSummary = [
      "New private event inquiry",
      "",
      `Name: ${fullName}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone}${inquiry.extension ? ` ext. ${inquiry.extension}` : ""}`,
      `Preferred contact: ${inquiry.contactPreference}`,
      `Company: ${inquiry.company}`,
      `Event style: ${inquiry.eventStyle || "Not specified"}`,
      `Location: ${inquiry.location}`,
      `Date: ${inquiry.eventDate}`,
      `Time: ${inquiry.startTime || "Not specified"}${inquiry.endTime ? `–${inquiry.endTime}` : ""}`,
      `Guests: ${inquiry.guestCount}`,
      `Event: ${inquiry.eventNature}`,
      `Additional information: ${inquiry.details || "None"}`,
      `Referral: ${inquiry.referral || "Not specified"}`,
    ].join("\n");

    await Promise.all([
      sendEmail({
        to: eventInbox,
        replyTo: inquiry.email,
        subject: `Private event inquiry: ${fullName} (${inquiry.guestCount} guests)`,
        text: eventSummary,
      }),
      sendEmail({
        to: inquiry.email,
        subject: `We received your event inquiry — ${site.name}`,
        text: `Hi ${inquiry.firstName},\n\nThank you for reaching out about your event. We received your inquiry and our team will follow up to discuss availability and details. This message is an acknowledgement, not a confirmed booking.\n\n${site.name}`,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your event inquiry has been sent, and our team will be in touch.",
    });
  } catch (error) {
    console.error("Private event inquiry failed:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send your inquiry right now. Please try again or contact us directly.",
      },
      { status: 500 },
    );
  }
}
