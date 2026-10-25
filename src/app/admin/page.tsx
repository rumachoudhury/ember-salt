import { readReservations } from "@/lib/reservationStore";
import { site } from "@/data/site";

export const metadata = {
  title: `Admin — ${site.name}`,
  description: "Reservation dashboard for Ember & Salt.",
};

export default async function AdminPage() {
  const reservations = await readReservations();

  return (
    <main id="main" className="wrap admin-shell">
      <div className="admin-header">
        <div>
          <p className="kicker">
            <i /> Admin
          </p>
          <h1>Reservation dashboard</h1>
        </div>
      </div>

      <section className="admin-card">
        <div className="admin-toolbar">
          <h2>Recent requests</h2>
          <span className="badge">{reservations.length} total</span>
        </div>

        {reservations.length === 0 ? (
          <div className="empty-state">
            <p>No reservation requests yet.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Party</th>
                  <th>Notes</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td>{reservation.name}</td>
                    <td>{reservation.email}</td>
                    <td>{reservation.date}</td>
                    <td>{reservation.time}</td>
                    <td>{reservation.party}</td>
                    <td>{reservation.notes || "—"}</td>
                    <td>{new Date(reservation.receivedAt).toLocaleString()}</td>
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
