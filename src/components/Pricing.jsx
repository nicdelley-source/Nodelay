import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    desc: "For side projects and prototypes.",
    features: ["10k events / month", "1 project", "Community support"],
    cta: "Get started",
    variant: "ghost",
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    desc: "For products live in production.",
    features: ["5M events / month", "Unlimited projects", "99.99% uptime SLA", "Priority support"],
    cta: "Start free trial",
    variant: "primary",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams with scale & compliance needs.",
    features: ["Unlimited events", "Dedicated infrastructure", "SSO & audit logs", "Dedicated support"],
    cta: "Contact sales",
    variant: "ghost",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, usage-based pricing</h2>
          <p>Start free. Pay only for what you use as you grow.</p>
        </Reveal>

        <motion.div
          className="pricing-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {PLANS.map((plan) => (
            <motion.article
              key={plan.name}
              className={`price-card${plan.featured ? " price-card-featured" : ""}`}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {plan.featured && <span className="price-badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price}
                {plan.period && <span>{plan.period}</span>}
              </p>
              <p className="price-desc">{plan.desc}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#cta" className={`btn btn-${plan.variant} btn-block`}>
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
