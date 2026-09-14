import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { SERVICES } from "../lib/data.js";

export default function Services() {
  return (
    <section id="leistungen">
      <div className="container">
        <Reveal className="section-header">
          <div className="tag">Leistungen</div>
          <h2>Was ich für dich baue.</h2>
        </Reveal>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
