import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupForm({ className, defaultNote, submitLabel }) {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState(defaultNote);
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsError(true);
      setNote("Please enter a valid email address.");
      return;
    }

    setIsError(false);
    setNote(`Thanks! We'll be in touch at ${email}.`);
    setEmail("");

    setTimeout(() => setNote(defaultNote), 5000);
  }

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          required
        />
        <motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {submitLabel}
        </motion.button>
      </form>
      <AnimatePresence mode="wait">
        <motion.p
          key={note}
          className="hero-note"
          style={isError ? { color: "#f87171" } : undefined}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {note}
        </motion.p>
      </AnimatePresence>
    </>
  );
}
