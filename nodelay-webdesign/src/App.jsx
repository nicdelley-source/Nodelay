import { useCallback, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import CubeSection from "./components/CubeSection.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectOptionsModal from "./components/ProjectOptionsModal.jsx";
import ProjectDetailsModal from "./components/ProjectDetailsModal.jsx";

export default function App() {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const openOptions = useCallback(() => setOptionsOpen(true), []);
  const closeOptions = useCallback(() => setOptionsOpen(false), []);
  const closeDetails = useCallback(() => setDetailsOpen(false), []);

  // Step 1 -> step 2: close the chooser, then open details shortly after
  // (mirrors the original's 150ms stagger so the two modals don't overlap).
  const handleSelectOption = useCallback((planId) => {
    setSelectedPlanId(planId);
    setOptionsOpen(false);
    setTimeout(() => setDetailsOpen(true), 150);
  }, []);

  // Pricing "Anfragen" buttons already know which plan — jump straight to
  // the details form instead of making the visitor re-pick it.
  const handleRequestPlan = useCallback((planId) => {
    setSelectedPlanId(planId);
    setDetailsOpen(true);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onStartProject={openOptions} />
        <Services />
        <Portfolio />
        <CubeSection onOpenModal={openOptions} />
        <Pricing onRequestPlan={handleRequestPlan} />
        <Contact />
      </main>
      <Footer />

      <ProjectOptionsModal open={optionsOpen} onClose={closeOptions} onSelect={handleSelectOption} />
      <ProjectDetailsModal open={detailsOpen} onClose={closeDetails} planId={selectedPlanId} />
    </>
  );
}
