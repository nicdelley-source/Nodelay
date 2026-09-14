import { useCallback, useRef } from "react";
import Reveal from "./Reveal.jsx";
import useCubeScene from "../hooks/useCubeScene.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import { CUBE_FACES } from "../lib/data.js";

export default function CubeSection({ onOpenModal }) {
  const cubeContainerRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const navigateToSection = useCallback(
    (id, cube) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });

      if (cube) {
        cube.scale.set(1.15, 1.15, 1.15);
        setTimeout(() => cube.scale.set(1, 1, 1), 200);
      }

      if (id === "kontakt") {
        setTimeout(onOpenModal, 400);
      }
    },
    [onOpenModal]
  );

  useCubeScene(cubeContainerRef, { onNavigate: navigateToSection, reducedMotion });

  return (
    <section className="cube-section">
      <div className="container">
        <Reveal className="section-header">
          <div className="tag">Interaktiv</div>
          <h2>Dreh den Würfel.</h2>
          <p>Zieh den Würfel mit der Maus oder dem Finger — jede Seite bringt dich direkt weiter.</p>
        </Reveal>

        <div className="cube-wrapper">
          <div id="cube-canvas-container" ref={cubeContainerRef} />
          <div className="cube-hint">👆 Ziehen zum Drehen · Klicken zum Öffnen</div>
          <div className="cube-face-labels">
            {CUBE_FACES.filter((f) => !f.isLogo).map((face) => (
              <button
                key={face.target + face.label}
                className="cube-face-chip"
                onClick={() => navigateToSection(face.target)}
              >
                {face.icon} {face.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
