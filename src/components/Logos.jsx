import Reveal from "./Reveal.jsx";

const LOGOS = [
  "Realtime APIs",
  "Live Dashboards",
  "Multiplayer Apps",
  "Trading & Fintech",
  "Gaming",
  "IoT & Devices",
];

export default function Logos() {
  return (
    <section className="logos" aria-label="Built for teams shipping fast products">
      <div className="container">
        <Reveal as="p" className="logos-label">
          Built for teams who can't afford to make people wait
        </Reveal>
        <Reveal as="div" className="logos-row" delay={0.1}>
          {LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
