import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Logos from "./components/Logos.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
