import Logo from "./Logo.jsx";
import { NAV_LINKS, CONTACT } from "../lib/data.js";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Logo className="logo footer-logo" />
          <div className="footer-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NoDelay Webdesign — Nic Delley</span>
          <span>
            {CONTACT.email} · {CONTACT.phone}
          </span>
        </div>
      </div>
    </footer>
  );
}
