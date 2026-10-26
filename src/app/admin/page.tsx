import { readReservations } from "@/lib/reservationStore";
import { site } from "@/data/site";

export const metadata = {
  title: `Admin — ${site.name}`,
  description: "Reservation dashboard for Ember & Salt.",
};

export default async function AdminPage() {
  const reservations = await readReservations();

  return (
    <main id="main" className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)] py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] text-ember-3 uppercase">
            <i className="size-[7px] rounded-full bg-ember-2" /> Admin
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold">Reservation dashboard</h1>
        </div>
      </div>

      <section className="overflow-hidden rounded-[18px] border border-line bg-surface">
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl font-semibold">Recent requests</h2>
          <span className="rounded-full border border-line px-3 py-1 text-sm text-muted">{reservations.length} total</span>
        </div>

        {reservations.length === 0 ? (
          <div className="px-6 py-12 text-center text-muted">
            <p>No reservation requests yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-surface-2 text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Time</th>
                  <th className="px-4 py-3 font-semibold">Party</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                  <th className="px-4 py-3 font-semibold">Received</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr className="border-t border-line" key={reservation.id}>
                    <td className="px-4 py-3">{reservation.name}</td>
                    <td className="px-4 py-3">{reservation.email}</td>
                    <td className="px-4 py-3">{reservation.date}</td>
                    <td className="px-4 py-3">{reservation.time}</td>
                    <td className="px-4 py-3">{reservation.party}</td>
                    <td className="px-4 py-3">{reservation.notes || "—"}</td>
                    <td className="px-4 py-3">{new Date(reservation.receivedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
