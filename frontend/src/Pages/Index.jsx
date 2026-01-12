import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

// Lazy Load heavy sections
const AboutSection = React.lazy(() => import("../components/AboutSection"));
const SkillsSection = React.lazy(() => import("../components/SkillsSection"));
const ProjectsSection = React.lazy(() => import("../components/ProjectsSection"));
const ContactSection = React.lazy(() => import("../components/ContactSection"));
const Footer = React.lazy(() => import("../components/Footer"));

const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '300px' }}>
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="position-relative" style={{ zIndex: 1, background: 'transparent' }}>
        <HeroSection />

        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;
