import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { readReservations, saveReservation } from "@/lib/reservationStore";

export const runtime = "nodejs";

export async function GET() {
  const reservations = await readReservations();
  return NextResponse.json({ reservations }, { status: 200 });
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

    const saved = await saveReservation(data);

    if (!saved.valid) {
      return NextResponse.json(
        { error: saved.errors[0] ?? "Please provide a valid reservation request." },
        { status: 400 }
      );
    }

    const reservation = saved.reservation;
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
        subject: `Reservation request: ${reservation.name} (${reservation.party} guests)`,
        text: `New reservation request\n\nName: ${reservation.name}\nEmail: ${reservation.email}\nDate: ${reservation.date}\nTime: ${reservation.time}\nParty size: ${reservation.party}\nNotes: ${reservation.notes || "None"}`,
      });
    } else {
      console.info("Reservation request received:", reservation);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thanks, ${reservation.name.split(" ")[0]} — your reservation request has been received. We'll confirm by email shortly.`,
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
