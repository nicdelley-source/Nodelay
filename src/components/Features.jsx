import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    icon: "⚡",
    title: "Sub-10ms sync",
    body: "Push and receive updates across every connected client in single-digit milliseconds, globally.",
  },
  {
    icon: "🌍",
    title: "Global edge network",
    body: "30+ points of presence keep data close to your users, wherever in the world they are.",
  },
  {
    icon: "🔒",
    title: "End-to-end secure",
    body: "Encrypted in transit and at rest, with granular per-channel access control out of the box.",
  },
  {
    icon: "🔌",
    title: "Drop-in SDKs",
    body: "Lightweight client libraries for JavaScript, iOS, Android, and server-side runtimes.",
  },
  {
    icon: "📈",
    title: "Scales automatically",
    body: "From your first 10 users to your first 10 million — no re-architecture required.",
  },
  {
    icon: "🛠️",
    title: "Built-in observability",
    body: "Live dashboards and alerting so you know about a delay before your users do.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything you need to feel instant</h2>
          <p>A complete toolkit for building products that respond the moment your users act.</p>
        </Reveal>

        <motion.div
          className="feature-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {FEATURES.map((feature) => (
            <motion.article
              key={feature.title}
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
