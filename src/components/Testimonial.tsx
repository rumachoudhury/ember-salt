import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="py-[clamp(4rem,9vw,6.5rem)]">
      <div className="mx-auto max-w-[1120px] px-[clamp(1.25rem,5vw,3rem)]">
        <Reveal as="div" className="mx-auto max-w-[60ch] text-center">
          <blockquote className="font-serif text-[clamp(1.4rem,3.2vw,1.9rem)] leading-[1.4] font-medium">
            &ldquo;The ribeye alone is worth the trip, but it&apos;s the room — the fire right there
            in the middle of it — that brings us back.&rdquo;
          </blockquote>
          <cite className="mt-5 block text-[0.92rem] text-muted not-italic">— A regular, most Friday nights</cite>
        </Reveal>
      </div>
    </section>
  );
}
