import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { PORTFOLIO } from "../lib/data.js";

function JnsidePreview() {
  return (
    <div className="portfolio-preview portfolio-preview--jnside">
      <svg className="jnside-strand" viewBox="0 0 200 240" aria-hidden="true">
        <path
          d="M140 20C110 70 155 110 130 165 115 200 80 225 55 210 35 198 33 172 55 166c25-6 40 18 22 30"
          fill="none"
          stroke="#B7A6F0"
          strokeOpacity="0.65"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M158 26C138 66 168 104 150 155"
          fill="none"
          stroke="#B7A6F0"
          strokeOpacity="0.32"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <div className="jnside-brandmark">
        <svg viewBox="0 0 64 64" width="26" height="26" aria-hidden="true">
          <path
            d="M39 7c-5 11 6 20 1.5 33C37 50 30 57 22.5 55 15.5 53 14.5 45 20.5 43.5c5-1.3 8 3.5 4.5 6"
            fill="none"
            stroke="#F2BF85"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="M45 9c-4 10 5 19 1 31"
            fill="none"
            stroke="#F2BF85"
            strokeOpacity="0.5"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="jnside-word">Jnside</span>
      </div>
      <span className="jnside-tagline">Friseursalon am Neumühlequai, Zürich</span>
      <span className="portfolio-visit">Live-Website ansehen →</span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="referenzen">
      <div className="container">
        <Reveal className="section-header">
          <div className="tag">Referenzen</div>
          <h2>Aktuelle Projekte.</h2>
        </Reveal>

        <motion.div
          className="portfolio-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {PORTFOLIO.map((item) => {
            const variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

            if (item.href) {
              return (
                <motion.a
                  key={item.id}
                  className="portfolio-item"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -12 }}
                >
                  <JnsidePreview />
                  <div className="portfolio-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    {item.tags.map((tag) => (
                      <span className="portfolio-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.id}
                className="portfolio-item"
                variants={variants}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -12 }}
              >
                <div className="portfolio-image">{item.icon}</div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.tags.map((tag) => (
                    <span className="portfolio-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
