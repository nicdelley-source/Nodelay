import { useRef } from "react";
import { motion } from "framer-motion";
import useHeroScene from "../hooks/useHeroScene.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

export default function Hero({ onStartProject }) {
  const canvasRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  useHeroScene(canvasRef, { reducedMotion });

  return (
    <section className="hero">
      <div id="canvas-container" ref={canvasRef} aria-hidden="true" />
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="tag">⚡ Moderne Websites</div>
          <h1>Deine Website, schnell gemacht.</h1>
          <p className="hero-slogan">Webseiten ohne Verzögerung — schnell, modern und auf den Punkt.</p>
          <p>
            Ich baue für Kleinunternehmen moderne, schnelle und konversionsstarke Websites. Von
            Landingpages bis Online-Shops — alles aus einer Hand.
          </p>
          <button className="btn btn-light" onClick={onStartProject}>
            Jetzt Projekt starten →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
