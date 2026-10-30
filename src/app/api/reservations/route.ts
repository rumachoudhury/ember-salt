import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { saveReservation } from "@/lib/reservationStore";
import { sendEmail } from "@/lib/resend";

export const runtime = "nodejs";

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
        {
          error:
            saved.errors[0] ?? "Please provide a valid reservation request.",
        },
        { status: 400 },
      );
    }

    const reservation = saved.reservation;
    const reservationInbox =
      process.env.RESERVATION_EMAIL ??
      process.env.NEXT_PUBLIC_RESERVATION_EMAIL ??
      "hello@emberandsalt.com";

    await Promise.all([
      sendEmail({
        to: reservationInbox,
        replyTo: reservation.email,
        subject: `Reservation request: ${reservation.name} (${reservation.party} guests)`,
        text: `New reservation request\n\nName: ${reservation.name}\nEmail: ${reservation.email}\nDate: ${reservation.date}\nTime: ${reservation.time}\nParty size: ${reservation.party}\nNotes: ${reservation.notes || "None"}`,
      }),
      sendEmail({
        to: reservation.email,
        subject: `We received your reservation request — ${site.name}`,
        text: `Hi ${reservation.name.split(" ")[0]},\n\nWe received your request for ${reservation.party} ${reservation.party === 1 ? "guest" : "guests"} on ${reservation.date} at ${reservation.time}. This is a request, not yet a confirmed reservation. Our team will follow up by email to confirm availability.\n\nThank you,\n${site.name}`,
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: `Thanks, ${reservation.name.split(" ")[0]} — your reservation request has been received. We'll confirm by email shortly.`,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Reservation submission failed:", error);
    return NextResponse.json(
      { error: "Reservation submission failed. Please try again." },
      { status: 500 },
    );
  }
}
