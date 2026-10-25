import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<{
      name: string;
      email: string;
      date: string;
      time: string;
      party: number | string;
      notes?: string;
    }>;

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const date = String(data.date ?? "").trim();
    const time = String(data.time ?? "").trim();
    const party = Number(data.party ?? 0);
    const notes = String(data.notes ?? "").trim();

    if (!name || !email || !date || !time || !party) {
      return NextResponse.json(
        { error: "Please provide your name, email, date, time, and party size." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (Number.isNaN(party) || party < 1 || party > 12) {
      return NextResponse.json({ error: "Party size must be between 1 and 12 guests." }, { status: 400 });
    }

    const reservation = {
      name,
      email,
      date,
      time,
      party,
      notes,
      receivedAt: new Date().toISOString(),
    };

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: Number(process.env.SMTP_PORT ?? 587) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: process.env.RESERVATION_FROM ?? `"${site.name}" <${smtpUser}>`,
        to: process.env.RESERVATION_EMAIL ?? process.env.NEXT_PUBLIC_RESERVATION_EMAIL ?? "hello@emberandsalt.com",
        subject: `Reservation request: ${name} (${party} guests)`,
        text: `New reservation request\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nParty size: ${party}\nNotes: ${notes || "None"}`,
      });
    } else {
      console.info("Reservation request received:", reservation);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thanks, ${name.split(" ")[0]} — your reservation request has been received. We'll confirm by email shortly.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reservation submission failed:", error);
    return NextResponse.json(
      { error: "Reservation submission failed. Please try again." },
      { status: 500 }
    );
  }
}
