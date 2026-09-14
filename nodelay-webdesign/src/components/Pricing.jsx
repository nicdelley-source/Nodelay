import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { PLANS } from "../lib/data.js";

export default function Pricing({ onRequestPlan }) {
  return (
    <section id="preise">
      <div className="container">
        <Reveal className="section-header">
          <div className="tag">Preise</div>
          <h2>Transparente Preise.</h2>
        </Reveal>

        <motion.div
          className="pricing-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              className={`pricing-card${plan.featured ? " featured" : ""}`}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <div className="tag">{plan.tag}</div>
              <h3>{plan.name}</h3>
              <div className="pricing-price">
                {plan.price} {plan.suffix}
              </div>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className="btn btn-solid"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => onRequestPlan(plan.id)}
              >
                Anfragen →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
