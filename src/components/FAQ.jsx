import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";

const QUESTIONS = [
  {
    q: "How is Nodelay different from a regular database?",
    a: "Nodelay sits alongside your existing database as a real-time sync layer, so you don't have to build your own websocket infrastructure or polling logic.",
  },
  {
    q: "Can I self-host Nodelay?",
    a: "Enterprise plans support dedicated and self-hosted deployments. Contact sales to discuss your requirements.",
  },
  {
    q: "What happens if I go over my plan's event limit?",
    a: "You'll get a heads-up before you hit your limit, and can upgrade at any time — we never drop your traffic without warning.",
  },
  {
    q: "Do you offer a free trial on paid plans?",
    a: "Yes — every paid plan starts with a 14-day free trial, no credit card required to begin.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-summary"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="faq-icon">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered</h2>
        </Reveal>

        <div className="faq-list">
          {QUESTIONS.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
