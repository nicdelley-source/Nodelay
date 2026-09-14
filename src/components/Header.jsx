import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">⚡</span>
          <span>Nodelay</span>
        </a>

        <nav className="nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#pricing" className="btn btn-ghost">
            Sign in
          </a>
          <a href="#cta" className="btn btn-primary">
            Get started
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobileNav"
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#cta" className="btn btn-primary" onClick={() => setOpen(false)}>
              Get started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
