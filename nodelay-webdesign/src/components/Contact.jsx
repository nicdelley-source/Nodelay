import Reveal from "./Reveal.jsx";
import { CONTACT } from "../lib/data.js";

export default function Contact() {
  return (
    <section id="kontakt">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <div className="tag">Jetzt durchstarten</div>
          <h2>Erzähl mir von deinem Projekt.</h2>
          <p>Kurze Nachricht reicht — ich melde mich innerhalb von 2 Werktagen mit einer ersten Einschätzung.</p>
          <div className="contact-details">
            <div>
              ✉️ <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div>
              ☎️ <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            </div>
            <div>
              ⌖ <span>Schweiz</span>
            </div>
          </div>
        </Reveal>

        {/* Native POST to formsubmit.co — intentionally not intercepted with JS
            so submissions keep working exactly like the original site. */}
        <Reveal
          as="form"
          className="form"
          delay={0.1}
          action={`https://formsubmit.co/${CONTACT.email}`}
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Dein Name" />
          <label htmlFor="email">E-Mail</label>
          <input id="email" name="email" type="email" required placeholder="du@beispiel.ch" />
          <label htmlFor="nachricht">Dein Projekt</label>
          <textarea id="nachricht" name="message" required placeholder="Erzähl mir kurz, was du brauchst..." />
          <button className="btn btn-solid" type="submit">
            Nachricht senden →
          </button>
          <p className="form-legal">
            Mit dem Absenden akzeptierst du unsere <a href="/datenschutz.html">Datenschutzerklärung</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
