# NoDelay Webdesign

Die echte Firmen-Website von **NoDelay Webdesign** (Nic Delley) — moderne, schnelle Websites für
Schweizer Kleinunternehmen. Eigenständiges Projekt in diesem Repo, getrennt von der `Nodelay`-Demo
im Repo-Root.

## Stack

React + [Vite](https://vitejs.dev/), animiert mit [Framer Motion](https://www.framer.com/motion/),
3D-Elemente (Hero-Partikelfeld & interaktiver Würfel) mit [three.js](https://threejs.org/).

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Dev-Server starten
npm run build     # Produktions-Build -> dist/
npm run preview   # Produktions-Build lokal ansehen
```

## Struktur

- `src/App.jsx` — Seitenaufbau + Modal-State (welches Formular gerade offen ist)
- `src/components/` — eine Komponente pro Abschnitt (Header, Hero, Services, Portfolio,
  CubeSection, Pricing, Contact, Footer) plus `Modal.jsx`, `Reveal.jsx`, `Logo.jsx`
- `src/hooks/useHeroScene.js`, `src/hooks/useCubeScene.js` — die beiden three.js-Szenen,
  gekapselt als React-Hooks mit vollständigem Cleanup (kein Leak bei Remounts/HMR)
- `src/lib/data.js` — einzige Quelle für Preise, Leistungen, Portfolio, Würfel-Seiten und
  Modal-Optionen (im Original an zwei Stellen dupliziert)
- `src/index.css` — Styling, Farben/Fonts unverändert zum Original (Space Grotesk + Source Serif 4)

## Was gegenüber der Original-HTML-Datei verbessert wurde

- **Mobiles Menü ergänzt** — unter 860px gab es im Original gar keine Navigation mehr
  (Links waren per CSS versteckt, kein Hamburger-Ersatz).
- **Three.js-Szenen sauber aufgeräumt** — Geometrien, Materialien, Texturen und der Renderer
  werden beim Unmount vollständig freigegeben; Resize reagiert auf die Container-Grösse
  (`ResizeObserver`) statt nur auf `window`.
- **`prefers-reduced-motion` wird respektiert** — Partikelfeld und Würfel rendern dann ein
  statisches Bild statt endlos zu animieren.
- **Weniger Partikel auf schmalen Viewports** (28 statt 60) für bessere Mobile-Performance.
- **Projekt-Anfragen bei den Preisen springen direkt zum Detailformular** statt erneut den
  Auswahl-Dialog zu zeigen — das Formular übermittelt jetzt ausserdem den gewählten
  Projekttyp (`projectType`) mit, was im Original beim Absenden verloren ging.
- **Preise/Leistungen/Portfolio/Würfel-Daten** leben nur noch an einer Stelle
  (`src/lib/data.js`) statt dupliziert in Preis-Sektion und Modal.
- Kontaktformulare senden weiterhin nativ per POST an `formsubmit.co` — bewusst nicht per
  JavaScript abgefangen, damit echte Anfragen exakt wie zuvor ankommen.
