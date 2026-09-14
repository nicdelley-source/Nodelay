import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const STEPS = [
  {
    number: 1,
    title: "Connect",
    body: "Install the SDK and connect your app to your nearest Nodelay edge region in minutes.",
  },
  {
    number: 2,
    title: "Publish",
    body: "Send events and state changes from anywhere — client, server, or edge function.",
  },
  {
    number: 3,
    title: "Sync instantly",
    body: "Every subscriber receives the update in real time, with automatic conflict resolution.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps to zero delay</h2>
        </Reveal>

        <motion.div
          className="steps"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              className="step"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
