import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "Every detail feels intentional — the fire, the pacing, the cocktails. It felt like a real evening out, not just dinner.",
    author: "Dana R.",
    label: "Date night favorite",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote:
      "The ribeye alone is worth the trip, but it&apos;s the room — the fire right there in the middle of it — that brings us back.",
    author: "A regular, most Friday nights",
    label: "Local favorite",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote:
      "Warm service, beautiful plates, and a menu that actually makes you want to try everything. We stayed for dessert and never looked at our phones.",
    author: "Marcus T.",
    label: "Anniversary dinner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { value: "4.9/5", label: "guest rating" },
  { value: "200+", label: "guest reviews" },
  { value: "Tue–Sun", label: "dinner service" },
];

const ratingBreakdown = [
  { label: "5 star", value: 92 },
  { label: "4 star", value: 7 },
  { label: "3 star", value: 1 },
];

export default function Testimonial() {
  return (
    <section className="py-[clamp(4rem,9vw,6.5rem)]">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)]">
        <Reveal
          as="div"
          className="rounded-[26px] border border-line bg-surface p-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_18px_40px_rgba(18,15,12,0.04)]"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.8rem] font-bold tracking-[0.16em] text-ember-3 uppercase">
                Guest reviews
              </p>
              <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-none">
                Loved by regulars and first-timers alike.
              </h2>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-ember-3">
                  <span className="text-2xl font-semibold">4.9</span>
                  <span className="text-[0.85rem] uppercase tracking-[0.14em]">
                    / 5
                  </span>
                </div>
                <div className="text-sm text-muted">
                  From 200+ guests who booked again
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-line bg-bg p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[2.5rem] font-semibold text-ink">
                  4.9
                </span>
                <span className="text-[0.8rem] uppercase tracking-[0.14em] text-muted">
                  Google reviews
                </span>
              </div>
              <div className="mt-3 text-[0.9rem] tracking-[0.18em] text-ember-2">
                ★★★★★
              </div>
              <div className="mt-6 space-y-3">
                {ratingBreakdown.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[52px_1fr_38px] items-center gap-3 text-[0.72rem] uppercase tracking-[0.12em] text-muted"
                  >
                    <span>{item.label}</span>
                    <div className="h-2 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-ember-2 to-ember"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <span>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Reveal
              key={stat.label}
              as="div"
              className="rounded-full border border-line bg-surface px-5 py-4 text-center"
            >
              <div className="text-xl font-semibold text-ink">{stat.value}</div>
              <div className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Reveal
              key={review.author}
              as="article"
              className="group rounded-[22px] border border-line bg-surface p-4 text-left shadow-[0_20px_45px_-28px_rgba(18,15,12,0.55)] transition duration-300 ease-brand hover:-translate-y-1 hover:border-ember/50"
            >
              <div className="flex justify-center pb-2">
                <img
                  className="block size-[180px] rounded-full object-cover ring-8 ring-white"
                  src={review.image}
                  alt={review.author}
                  loading="lazy"
                />
              </div>
              <div className="px-2 pb-2 pt-1">
                <div className="text-[0.9rem] tracking-[0.18em] text-ember-2">
                  ★★★★★
                </div>
                <p className="mt-4 text-[1.04rem] leading-[1.8] text-ink/85">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="font-semibold text-ink">{review.author}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                    {review.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
