import Modal from "./Modal.jsx";
import { PLANS } from "../lib/data.js";

export default function ProjectOptionsModal({ open, onClose, onSelect }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="project-options-title">
      <div className="modal-header">
        <h2 id="project-options-title">Was für ein Projekt brauchst du?</h2>
        <p>Wähle die beste Option für dein Projekt aus — ich passe alles an deine Bedürfnisse an.</p>
      </div>
      <div className="project-options">
        {PLANS.map((plan) => (
          <div className="project-option" key={plan.id}>
            <div className="option-icon">{plan.icon}</div>
            <h3>{plan.name}</h3>
            <p>{plan.modalDesc}</p>
            <div className="option-price">
              {plan.price} {plan.suffix}
            </div>
            <button className="btn btn-solid option-btn" onClick={() => onSelect(plan.id)}>
              Wählen →
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}
