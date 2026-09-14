# Nodelay

A landing page for **Nodelay** — a real-time sync/infrastructure product concept ("real-time, without the wait").

## Stack

React + [Vite](https://vitejs.dev/), animated with [Framer Motion](https://www.framer.com/motion/).

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

- `index.html` — Vite entry HTML
- `src/main.jsx` — React root
- `src/App.jsx` — page composition
- `src/components/` — one component per section (`Header`, `Hero`, `Logos`, `Features`, `HowItWorks`, `Pricing`, `FAQ`, `CTA`, `Footer`), plus `Reveal.jsx` (scroll-in-view fade/slide wrapper) and `SignupForm.jsx` (shared email capture form)
- `src/index.css` — all styling, responsive down to ~360px

## Animation

Framer Motion drives: staggered hero entrance, scroll-triggered section reveals (`whileInView`), the animated live-sync bar chart, the mobile nav slide-open, and the FAQ accordion expand/collapse.

## Notes

Copy, pricing, and stats are placeholder content meant to be replaced with real product details.
