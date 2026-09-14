import { motion } from "framer-motion";

/**
 * Fades + slides a block into view the first time it crosses the viewport.
 * Wrap any section/element in this instead of repeating the same
 * whileInView boilerplate everywhere.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}
