import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "Every detail feels intentional — the fire, the pacing, the cocktails. It felt like a real evening out, not just dinner.",
    author: "Dana R.",
    label: "Date night favorite",
  },
  {
    quote:
      "The ribeye alone is worth the trip, but it&apos;s the room — the fire right there in the middle of it — that brings us back.",
    author: "A regular, most Friday nights",
    label: "Local favorite",
  },
  {
    quote:
      "Warm service, beautiful plates, and a menu that actually makes you want to try everything. We stayed for dessert and never looked at our phones.",
    author: "Marcus T.",
    label: "Anniversary dinner",
  },
];

export default function Testimonial() {
  return (
    <section className="py-[clamp(4rem,9vw,6.5rem)]">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)]">
        <Reveal as="div" className="mx-auto max-w-[60ch] text-center">
          <p className="text-[0.8rem] font-bold tracking-[0.16em] text-ember-3 uppercase">Guest reviews</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] font-semibold">Loved by regulars and first-timers alike.</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Reveal key={review.author} as="article" className="rounded-[18px] border border-line bg-surface p-6 text-left shadow-[0_18px_40px_rgba(18,15,12,0.04)]">
              <div className="text-[1rem] tracking-[0.18em] text-ember-2">★★★★★</div>
              <p className="mt-4 text-[1.05rem] leading-[1.8] text-ink/85">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink">{review.author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{review.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
