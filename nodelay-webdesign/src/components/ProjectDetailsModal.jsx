import Modal from "./Modal.jsx";
import { PLANS, INDUSTRIES, TIMELINES, CONTACT } from "../lib/data.js";

export default function ProjectDetailsModal({ open, onClose, planId }) {
  const plan = PLANS.find((p) => p.id === planId);
  const heading = plan ? `Details zu deinem ${plan.name}-Projekt` : "Details zu deinem Projekt";

  return (
    <Modal open={open} onClose={onClose} labelledBy="project-details-title">
      <div className="modal-header">
        <h2 id="project-details-title">{heading}</h2>
        <p>Damit ich dir ein passendes Angebot machen kann, erzähl mir noch ein bisschen mehr.</p>
      </div>

      {/* Native POST to formsubmit.co — intentionally not intercepted with JS
          so submissions keep working exactly like the original site. */}
      <form
        className="project-details-form"
        action={`https://formsubmit.co/${CONTACT.email}`}
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="projectType" value={plan?.name ?? ""} />

        <div className="form-group">
          <label htmlFor="projectName">Projektname oder Website-Name *</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            required
            placeholder="z.B. Mein Café, Online-Shop für..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="industry">Branche / Industrie *</label>
          <select id="industry" name="industry" required defaultValue="">
            {INDUSTRIES.map((option) => (
              <option key={option.value} value={option.value} disabled={option.value === ""}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Zeitrahmen *</label>
          <select id="timeline" name="timeline" required defaultValue="">
            {TIMELINES.map((option) => (
              <option key={option.value} value={option.value} disabled={option.value === ""}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Projektbeschreibung *</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            placeholder="Was soll die Website können? Besonderheiten?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactName">Dein Name *</label>
          <input type="text" id="contactName" name="name" required placeholder="Wie heißt du?" />
        </div>

        <div className="form-group">
          <label htmlFor="contactEmail">Deine E-Mail *</label>
          <input type="email" id="contactEmail" name="email" required placeholder="du@beispiel.ch" />
        </div>

        <div className="form-group">
          <label htmlFor="contactPhone">Telefonnummer (optional)</label>
          <input type="tel" id="contactPhone" name="phone" placeholder="077 123 45 67" />
        </div>

        <button type="submit" className="btn btn-solid" style={{ width: "100%", justifyContent: "center" }}>
          Projekt einreichen →
        </button>
      </form>
    </Modal>
  );
}
