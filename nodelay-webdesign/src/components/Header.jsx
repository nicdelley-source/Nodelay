import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo.jsx";
import { NAV_LINKS, CONTACT } from "../lib/data.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="topbar">
        <div className="container topbar-inner">
          <a className="topbar-email" href={`mailto:${CONTACT.email}`}>
            ✉️ {CONTACT.email}
          </a>
          <a
            className="topbar-instagram"
            href={CONTACT.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.2.27 3 .58a6.1 6.1 0 0 1 2.2 1.44 6.1 6.1 0 0 1 1.44 2.2c.31.8.52 1.8.58 3 .07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.27 2.2-.58 3a6.1 6.1 0 0 1-1.44 2.2 6.1 6.1 0 0 1-2.2 1.44c-.8.31-1.8.52-3 .58-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.2-.27-3-.58a6.1 6.1 0 0 1-2.2-1.44 6.1 6.1 0 0 1-1.44-2.2c-.31-.8-.52-1.8-.58-3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.27-2.2.58-3a6.1 6.1 0 0 1 1.44-2.2A6.1 6.1 0 0 1 6.49.46c.8-.31 1.8-.52 3-.58C10.79 2.2 11.2 2.2 12 2.2zm0 1.8c-3.14 0-3.51 0-4.75.07-1.02.05-1.57.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.3.92-.36 1.94C2.9 9.4 2.9 9.77 2.9 12.9s0 3.5.07 4.74c.05 1.02.22 1.57.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.92.3 1.94.36 1.24.07 1.61.07 4.75.07s3.51 0 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.3-.92.36-1.94.07-1.24.07-1.61.07-4.74s0-3.5-.07-4.74c-.05-1.02-.22-1.57-.36-1.94a3.2 3.2 0 0 0-.79-1.2 3.2 3.2 0 0 0-1.2-.79c-.37-.14-.92-.3-1.94-.36C15.51 4 15.14 4 12 4z" />
              <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              <circle cx="17.3" cy="6.7" r="1.1" />
            </svg>
            {CONTACT.instagram}
          </a>
        </div>
      </div>

      <nav className="container">
        <Logo />

        <div className="navlinks">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
        </button>
      </nav>

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
