/** A handful of floating ember particles drifting up through the hero. Pure CSS animation. */
export default function Embers() {
  const sparks = [
    { left: "8%", delay: "0s", dur: "8s", dx: "24px" },
    { left: "20%", delay: "1.4s", dur: "10s", dx: "-18px" },
    { left: "35%", delay: ".6s", dur: "7.5s", dx: "14px" },
    { left: "52%", delay: "2.2s", dur: "9s", dx: "-26px" },
    { left: "68%", delay: "1s", dur: "8.5s", dx: "20px" },
    { left: "80%", delay: "2.8s", dur: "7s", dx: "-12px" },
    { left: "92%", delay: ".3s", dur: "9.5s", dx: "16px" },
  ];
  return (
    <div className="embers" aria-hidden="true">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="ember-dot"
          style={{ left: s.left, animationDelay: s.delay, animationDuration: s.dur, "--dx": s.dx } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
