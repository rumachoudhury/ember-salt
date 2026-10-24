import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal as="div" className="testimonial">
          <blockquote>
            &ldquo;The ribeye alone is worth the trip, but it&apos;s the room — the fire right there
            in the middle of it — that brings us back.&rdquo;
          </blockquote>
          <cite>— A regular, most Friday nights</cite>
        </Reveal>
      </div>
    </section>
  );
}
