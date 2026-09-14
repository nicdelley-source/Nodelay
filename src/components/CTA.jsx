import Reveal from "./Reveal.jsx";
import SignupForm from "./SignupForm.jsx";

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <Reveal className="container cta-inner">
        <h2>Stop making your users wait.</h2>
        <p>Get started with Nodelay in minutes — free up to 10,000 events a month.</p>
        <SignupForm
          className="cta-form"
          defaultNote="No credit card required"
          submitLabel="Create free account"
        />
      </Reveal>
    </section>
  );
}
