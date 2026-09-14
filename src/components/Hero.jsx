import { motion } from "framer-motion";
import SignupForm from "./SignupForm.jsx";

const STATS = [
  { value: "<10ms", label: "median latency" },
  { value: "99.99%", label: "uptime SLA" },
  { value: "30+", label: "global edge regions" },
];

const BAR_HEIGHTS = [40, 70, 55, 90, 35, 65, 80, 50, 75, 45];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="container hero-inner"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.span
          className="eyebrow"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
        >
          ⚡ Now serving sub‑10ms globally
        </motion.span>

        <motion.h1 variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
          Real‑time, <span className="text-gradient">without the wait.</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
        >
          Nodelay is the infrastructure layer for instant sync, live updates, and
          zero-lag collaboration — so your users never sit there watching a spinner.
        </motion.p>

        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
          <SignupForm
            className="hero-form"
            defaultNote="No credit card required · Free for your first 10k events/mo"
            submitLabel="Start free"
          />
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
        >
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="pulse-card">
          <div className="pulse-row">
            <span className="dot dot-live" />
            <span>Live sync</span>
            <span className="pulse-ms">4ms</span>
          </div>
          <div className="pulse-bars">
            {BAR_HEIGHTS.map((h, i) => (
              <motion.span
                key={i}
                style={{ height: `${h}%` }}
                animate={{ scaleY: [1, 0.6, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 3) * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
